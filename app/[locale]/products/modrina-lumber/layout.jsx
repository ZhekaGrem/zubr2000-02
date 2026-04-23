import { buildMetadata, productJsonLd, breadcrumbJsonLd } from "@/app/_lib/seo";
import JsonLd from "@/app/components/JsonLd/JsonLd";

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({ locale, path: "/products/modrina-lumber", pageKey: "modrina" });
}

export default function LarchLayout({ children, params: { locale } }) {
  const product = productJsonLd({
    locale,
    slug: "modrina",
    species: "Larch (Larix decidua)",
    latin: "Larix decidua",
    path: "/products/modrina-lumber",
  });
  const breadcrumb = breadcrumbJsonLd({
    locale,
    items: [
      { name: "ZUBR-2000", path: "" },
      { name: "Products", path: "/products" },
      { name: "Larch lumber", path: "/products/modrina-lumber" },
    ],
  });
  return (
    <>
      <JsonLd data={[product, breadcrumb]} id="larch-ld" />
      {children}
    </>
  );
}
