import { buildMetadata } from "@/app/_lib/seo";

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({
    locale,
    path: "/aboutus/offers",
    pageKey: "offers",
  });
}

export default function OffersLayout({ children }) {
  return children;
}
