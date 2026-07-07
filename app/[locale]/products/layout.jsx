import { buildMetadata } from "@/app/_lib/seo";

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({ locale, path: "/products", pageKey: "products" });
}

// The breadcrumb for the listing page lives in products/page.jsx, not here:
// a layout wraps its children, so a breadcrumb emitted here would duplicate
// onto every product detail page (which already renders its own, more
// specific breadcrumb).
export default function ProductsLayout({ children }) {
  return children;
}
