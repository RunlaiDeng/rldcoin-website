import { readFileSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import { TechnicalFigure } from "@/components/technical-figure";
import { Download } from "lucide-react";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Rldcoin white paper",
  "Runlai Deng's technical paper on Rldcoin regional payments, asynchronous settlement, interstellar communication limits, mandatory acceptance conditions, and regional rules.",
  "/whitepaper",
);

const source = readFileSync(
  join(process.cwd(), "public/documents/rldcoin-whitepaper.md"),
  "utf8",
);
const blocks = source.trim().split(/\n\s*\n/);
const sections = blocks
  .filter((block) => block.startsWith("## "))
  .map((block) => block.slice(3).trim());
const figureHeights: Record<string, number> = {
  transaction: 264,
  blocks: 267,
  channel: 281,
  "export-tree": 285,
  "cross-zone": 319,
  "contact-silence": 288,
  privacy: 216,
  "pow-risk": 262,
  "relay-networks": 278,
};

function idFor(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function inline(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*|https:\/\/\S+)/g)
    .filter(Boolean)
    .map((part, index) => {
      if (part.startsWith("**"))
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      if (part.startsWith("*")) return <em key={index}>{part.slice(1, -1)}</em>;
      if (part.startsWith("https://"))
        return (
          <a href={part} key={index}>
            {part}
          </a>
        );
      return part;
    });
}

export default function Whitepaper() {
  return (
    <div className="whitepaper-document">
      <section className="whitepaper-hero">
        <div className="container narrow">
          <p className="eyebrow plain">
            TECHNICAL PAPER · 4 OCTOBER 2026
          </p>
          <h1>Rldcoin: A Peer-to-Peer Payment System Across Delayed Regions</h1>
          <p className="whitepaper-byline">
            Runlai Deng ·{" "}
            <a href="mailto:dengrunlai@gmail.com">dengrunlai@gmail.com</a> ·
            www.rldcoin.com
          </p>
          <div className="whitepaper-actions">
            <a className="button" href="/documents/rldcoin-whitepaper.pdf">
              <Download size={17} aria-hidden="true" /> Download PDF
            </a>
            <a href="/documents/rldcoin-whitepaper.md">Read source Markdown</a>
          </div>
          <p className="whitepaper-context">
            This paper distinguishes regional payment rules, asynchronous
            evidence transport, normative transition rules, the risk register, and embedded acceptance gates.
            See <Link href="/network">network &amp; qualification</Link> for
            reviewed public ground evidence and a separate operator-telemetry
            link. For a shorter introduction, start with{" "}
            <Link href="/you-need-to-know">what you need to know</Link>.
          </p>
        </div>
      </section>
      <div className="container whitepaper-layout">
        <nav className="whitepaper-contents" aria-label="Paper contents">
          <span>CONTENTS</span>
          {sections.map((title) => (
            <a href={`#${idFor(title)}`} key={title}>
              {title}
            </a>
          ))}
        </nav>
        <details className="whitepaper-mobile-contents">
          <summary>Contents · {sections.length - 1} sections</summary>
          <nav aria-label="Paper contents on mobile">
            {sections.map((title) => (
              <a href={`#${idFor(title)}`} key={title}>
                {title}
              </a>
            ))}
          </nav>
        </details>
        <article className="whitepaper-paper">
          {blocks.slice(2).map((block, index) => {
            if (block.startsWith("## ")) {
              const title = block.slice(3).trim();
              return (
                <h2 id={idFor(title)} key={index}>
                  {title}
                </h2>
              );
            }
            if (block.startsWith("![")) {
              const match = block.match(
                /^!\[(.*?)\]\(\/diagrams\/([a-z-]+)\.svg\)$/,
              );
              if (!match)
                throw new Error(`Unsupported white paper figure: ${block}`);
              const name = match[2];
              if (!figureHeights[name])
                throw new Error(`Unknown white paper figure: ${name}`);
              return (
                <TechnicalFigure
                  key={index}
                  name={name}
                  height={figureHeights[name]}
                  caption={match[1]}
                />
              );
            }
            if (block.startsWith("```text\n") && block.endsWith("\n```")) {
              return (
                <pre key={index} className="whitepaper-code">
                  <code>{block.slice(8, -4).trim()}</code>
                </pre>
              );
            }
            return <p key={index}>{inline(block.replace(/\n/g, " "))}</p>;
          })}
        </article>
      </div>
    </div>
  );
}
