import type { MetadataRoute } from "next";

import { absoluteSiteUrl, siteMetadataBase } from "@/lib/server/site-metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const base = siteMetadataBase();
    return ["/", "/terms", "/privacy"].map((path) => ({
        url: absoluteSiteUrl(path, base),
        changeFrequency: "yearly",
        priority: path === "/" ? 1 : 0.3,
    }));
}
