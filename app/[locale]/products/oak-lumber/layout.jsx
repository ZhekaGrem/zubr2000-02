import { buildMetadata, productJsonLd, breadcrumbJsonLd } from "@/app/_lib/seo";
import JsonLd from "@/app/components/JsonLd/JsonLd";

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({ locale, path: "/products/oak-lumber", pageKey: "oak" });
}

export default function OakLayout({ children, params: { locale } }) {
  const product = productJsonLd({
    locale,
    slug: "oak",
    species: "Oak (Quercus robur)",
    latin: "Quercus robur",
    path: "/products/oak-lumber",
  });
  const breadcrumb = breadcrumbJsonLd({
    locale,
    items: [
      { name: "ZUBR-2000", path: "" },
      { name: "Products", path: "/products" },
      { name: "Oak lumber", path: "/products/oak-lumber" },
    ],
  });
  return (
    <>
      <JsonLd data={[product, breadcrumb]} id="oak-ld" />
      {children}
    </>
  );
}
