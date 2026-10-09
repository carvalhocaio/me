import type { MetadataRoute } from "next";
import { BASE_PATH } from "./lib/base-path";

const SITE = "https://carvalhocaio.github.io";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE}${BASE_PATH}/sitemap.xml`,
  };
}
