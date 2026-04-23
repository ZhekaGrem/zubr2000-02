import { buildMetadata } from "@/app/_lib/seo";

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({
    locale,
    path: "/aboutus/quality-standarts",
    pageKey: "quality",
  });
}

export default function QualityLayout({ children }) {
  return children;
}
