import { buildMetadata } from "@/app/_lib/seo";

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({ locale, path: "/aboutus/news", pageKey: "news" });
}

export default function NewsLayout({ children }) {
  return children;
}
