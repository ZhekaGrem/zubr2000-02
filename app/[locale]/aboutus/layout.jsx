import { buildMetadata, breadcrumbJsonLd } from "@/app/_lib/seo";
import JsonLd from "@/app/components/JsonLd/JsonLd";

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({ locale, path: "/aboutus", pageKey: "aboutus" });
}

export default function AboutUsLayout({ children, params: { locale } }) {
  const breadcrumb = breadcrumbJsonLd({
    locale,
    items: [
      { name: "ZUBR-2000", path: "" },
      { name: "About us", path: "/aboutus" },
    ],
  });
  return (
    <>
      <JsonLd data={breadcrumb} id="aboutus-breadcrumb" />
      {children}
    </>
  );
}
