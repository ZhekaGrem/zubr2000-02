import { SITE_URL, LOCALES, DEFAULT_LOCALE } from "@/app/_lib/seo";

const ROUTES = [
  { path: "", priority: 1.0 },
  { path: "/products", priority: 0.9 },
  { path: "/products/oak-lumber", priority: 0.8 },
  { path: "/products/ash-lumber", priority: 0.8 },
  { path: "/products/birch-lumber", priority: 0.8 },
  { path: "/products/modrina-lumber", priority: 0.8 },
  { path: "/aboutus", priority: 0.6 },
  { path: "/aboutus/certificates", priority: 0.5 },
  { path: "/aboutus/news", priority: 0.6 },
  { path: "/aboutus/quality-standarts", priority: 0.5 },
  { path: "/aboutus/manufacturing-process", priority: 0.5 },
  { path: "/aboutus/offers", priority: 0.5 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap() {
  const now = new Date();
  const entries = [];

  for (const { path, priority } of ROUTES) {
    const languages = { "x-default": `${SITE_URL}/${DEFAULT_LOCALE}${path}` };
    for (const loc of LOCALES) {
      languages[loc] = `${SITE_URL}/${loc}${path}`;
    }

    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority,
        alternates: { languages },
      });
    }
  }

  return entries;
}
