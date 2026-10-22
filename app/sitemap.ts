import type { MetadataRoute } from "next";
import { BASE_PATH } from "./lib/base-path";

const SITE = "https://carvalhocaio.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE}${BASE_PATH}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
