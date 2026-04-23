import { buildMetadata, breadcrumbJsonLd } from "@/app/_lib/seo";
import JsonLd from "@/app/components/JsonLd/JsonLd";

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({ locale, path: "/products", pageKey: "products" });
}

export default function ProductsLayout({ children, params: { locale } }) {
  const breadcrumb = breadcrumbJsonLd({
    locale,
    items: [
      { name: "ZUBR-2000", path: "" },
      { name: "Products", path: "/products" },
    ],
  });
  return (
    <>
      <JsonLd data={breadcrumb} id="products-breadcrumb" />
      {children}
    </>
  );
}
