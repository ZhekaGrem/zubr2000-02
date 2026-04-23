import { buildMetadata } from "@/app/_lib/seo";

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({
    locale,
    path: "/aboutus/certificates",
    pageKey: "certificates",
  });
}

export default function CertificatesLayout({ children }) {
  return children;
}
