import "@/app/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CtaFooter from "@/app/components/CtaFooter/CtaFooter";
import { BackToTopButton } from "../components/BackToTop/BackToTopButton";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import Loading from "./loading";
import JsonLd from "@/app/components/JsonLd/JsonLd";
import {
  buildMetadata,
  organizationJsonLd,
  websiteJsonLd,
  LOCALES,
} from "@/app/_lib/seo";

export const fontDisplay = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export async function generateMetadata({ params: { locale } }) {
  return buildMetadata({ locale, path: "/", pageKey: "home" });
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound(error);
  }

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} id="site-ld" />
      </head>
      <body className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Suspense fallback={<Loading />}>
            <div className="wrapper">
              <Navbar />
              <main className="content">
                {children}
                <Analytics />
              </main>
              <BackToTopButton />
            </div>
            <CtaFooter />
            <footer>
              <Footer />
            </footer>
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
