import { buildMetadata, productJsonLd, breadcrumbJsonLd } from "@/app/_lib/seo";
import JsonLd from "@/app/components/JsonLd/JsonLd";

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({ locale, path: "/products/ash-lumber", pageKey: "ash" });
}

export default function AshLayout({ children, params: { locale } }) {
  const product = productJsonLd({
    locale,
    slug: "ash",
    species: "Ash (Fraxinus excelsior)",
    latin: "Fraxinus excelsior",
    path: "/products/ash-lumber",
  });
  const breadcrumb = breadcrumbJsonLd({
    locale,
    items: [
      { name: "ZUBR-2000", path: "" },
      { name: "Products", path: "/products" },
      { name: "Ash lumber", path: "/products/ash-lumber" },
    ],
  });
  return (
    <>
      <JsonLd data={[product, breadcrumb]} id="ash-ld" />
      {children}
    </>
  );
}
