// Audit rendered pages, canonical metadata and all local navigation targets.
// Usage: node scripts/check-site.mjs http://127.0.0.1:3100
import assert from "node:assert/strict";

const base = new URL(process.argv[2] || "http://127.0.0.1:3100");
const canonicalOrigin = "https://rldcoin.com";
const documents = new Map();
const failures = [];
async function read(path) {
  if (!documents.has(path)) {
    documents.set(
      path,
      (async () => {
        const response = await fetch(new URL(path, base), {
          signal: AbortSignal.timeout(20000),
        });
        return {
          status: response.status,
          type: response.headers.get("content-type") || "",
          text: await response.text(),
        };
      })(),
    );
  }
  return documents.get(path);
}
const sitemap = await read("/sitemap.xml");
assert.equal(sitemap.status, 200, "sitemap must be available");
const urls = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => new URL(match[1]),
);
const links = new Set();
const titles = new Set();
for (const url of urls) {
  const page = await read(url.pathname);
  if (page.status !== 200)
    failures.push(`${url.pathname}: HTTP ${page.status}`);
  if ([...page.text.matchAll(/<h1(?:\s|>)/g)].length !== 1)
    failures.push(`${url.pathname}: expected one h1`);
  const title = page.text.match(/<title>([^<]+)<\/title>/)?.[1];
  if (!title || titles.has(title))
    failures.push(`${url.pathname}: missing or duplicate title`);
  titles.add(title);
  const canonical = page.text.match(
    /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/,
  )?.[1];
  if (
    !canonical ||
    new URL(canonical).href !== new URL(url.pathname, canonicalOrigin).href
  )
    failures.push(`${url.pathname}: wrong canonical ${canonical}`);
  for (const match of page.text.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const target = new URL(
      match[1].replaceAll("&amp;", "&"),
      new URL(url.pathname, base),
    );
    if (target.origin === base.origin || target.origin === canonicalOrigin)
      links.add(target.pathname + target.search + target.hash);
  }
}
let anchors = 0;
for (const link of links) {
  const target = new URL(link, base);
  const page = await read(target.pathname + target.search);
  if (page.status !== 200) failures.push(`${link}: HTTP ${page.status}`);
  if (target.hash) {
    anchors++;
    const id = decodeURIComponent(target.hash.slice(1));
    if (!page.text.includes(`id="${id}"`))
      failures.push(`${link}: missing anchor`);
  }
}
const missing = await read("/__missing_review_page__");
if (missing.status !== 404)
  failures.push(`missing page: expected 404, got ${missing.status}`);
const report = {
  base: base.origin,
  pages: urls.length,
  localLinks: links.size,
  anchors,
  resourcesFetched: documents.size,
  failures,
};
console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
