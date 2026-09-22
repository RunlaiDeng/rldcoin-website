import type { MetadataRoute } from "next";
import { SITE, pages } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...Object.keys(pages)].map((path) => ({
    url: `${SITE}/${path}`,
    changeFrequency: path === "network" ? "daily" : "monthly",
    priority: path ? 0.7 : 1,
  }));
}
