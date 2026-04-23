import { buildMetadata } from "@/app/_lib/seo";

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({
    locale,
    path: "/aboutus/manufacturing-process",
    pageKey: "manufacturing",
  });
}

export default function ManufacturingLayout({ children }) {
  return children;
}
