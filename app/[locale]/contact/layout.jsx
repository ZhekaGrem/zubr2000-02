import { buildMetadata } from "@/app/_lib/seo";

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({ locale, path: "/contact", pageKey: "contact" });
}

export default function ContactLayout({ children }) {
  return children;
}
