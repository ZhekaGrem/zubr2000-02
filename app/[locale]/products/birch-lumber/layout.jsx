import { buildMetadata, productJsonLd, breadcrumbJsonLd } from "@/app/_lib/seo";
import JsonLd from "@/app/components/JsonLd/JsonLd";

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({ locale, path: "/products/birch-lumber", pageKey: "birch" });
}

export default function BirchLayout({ children, params: { locale } }) {
  const product = productJsonLd({
    locale,
    slug: "birch",
    species: "Birch (Betula pendula)",
    latin: "Betula pendula",
    path: "/products/birch-lumber",
  });
  const breadcrumb = breadcrumbJsonLd({
    locale,
    items: [
      { name: "ZUBR-2000", path: "" },
      { name: "Products", path: "/products" },
      { name: "Birch lumber", path: "/products/birch-lumber" },
    ],
  });
  return (
    <>
      <JsonLd data={[product, breadcrumb]} id="birch-ld" />
      {children}
    </>
  );
}
