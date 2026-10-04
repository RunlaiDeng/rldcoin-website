import type { MetadataRoute } from "next";
import { SITE, pages } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "whitepaper",
    "research",
    "node-network",
    ...Object.keys(pages),
  ].map((path) => ({
    url: `${SITE}/${path}`,
    lastModified: new Date("2026-10-04T00:00:00Z"),
    changeFrequency: path === "network" ? "daily" : "monthly",
    priority: path ? 0.7 : 1,
  }));
}
