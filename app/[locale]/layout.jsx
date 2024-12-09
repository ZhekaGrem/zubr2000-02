import "@/app/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { BackToTopButton } from "../components/BackToTop/BackToTopButton";
import { Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import Loading from "./loading";

export const font = Source_Sans_3({
  weight: ["300", "400", "500", "600"],
  display: "swap",
  subsets: ["latin-ext"],
  variable: "--font-source",
});

const meta = {
  title: "ZUBR-2000",
  description:
    "ZUBR-2000 is a high-quality wood from Ukraine. oak lumber, ash lumber, birch lumber, larch lumber. Find the perfect timber for your project. ЗУБР-2000 – високоякісна деревина з України.  пиломатеріали дуб,  пиломатеріали ясен, пиломатеріали береза, пиломатеріали модрина. Знайдіть ідеальну деревину для вашого проекту.",
  image: "https://www.zubr-2000.com.ua/photo_tittl_%E2%84%961.1.webp",
};

export const metadata = {
  name: "zubr-2000 зубр-2000",
  short_name: [
    "зубр",
    "зубр 2000",
    "zubr 2000",
    "зубр2000",
    "zubr2000",
    "zubr-2000",
    "oak",
    "ash",
    "lumber",
    "дерево",
  ],
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://zubr-2000.com.ua/en",
    locale: "en",
    siteName: meta.title,
    type: "website",
    images: ["https://www.zubr-2000.com.ua/photo_tittl_%E2%84%961.1.webp"],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: ["https://www.zubr-2000.com.ua/photo_tittl_%E2%84%961.1.webp"],
  },
  keywords: [
    "дерево",
    "пиломатеріали",
    "пиломатеріали україна",
    "дуб україна",
    "ясин україна",
    "зубр2000",
    "зубр 2000",
    "зубр дерево",
    "ЗУБР-2000",
    "Zubr2000",
    "zubr-2000",
    "zubr 2000",
    "lumber oak",
    "lumber ash",
    "lumber larch",
    "lumber sale",
    "wood sale",
    "timber sale",
    "lumber offers",
    "wood deals",
    "timber discounts",
    "продаж деревини",
    "продаж дерева",
    "продаж деревляних матеріалів",
    "акції на деревину",
    "знижки на дерево",
    "vente de bois",
    "offres de bois",
    "rabais sur le bois",
    "promotions sur le bois",
    "vendita di legname",
    "vendita di legno",
    "offerte di legname",
    "sconti sul legno",
    "promozioni sul legno",
    "holzverkauf",
    "holzangebote",
    "rabatte auf holz",
    "holzaktionen",
    "holzdeals",
    "træsalg",
    "trætilbud",
    "rabatter på træ",
    "trækampagner",
    "tilbud på træ",
    "träförsäljning",
    "träerbjudanden",
    "rabatter på trä",
    "träkampanjer",
    "träaffär",
    "sprzedaż drewna",
    "oferty drewna",
    "zniżki na drewno",
    "promocje na drewno",
    "promocje na drewno",
    "продажа древесины",
    "предложения по древесине",
    "скидки на древесину",
    "акции на древесину",
    "деревянные сделки",
  ],
  icons: {
    icon: ["./favicon.ico"],
    apple: ["./favicon.ico"],
    shortcut: ["./favicon.ico"],
  },
};

export function generateStaticParams() {
  return [
    { locale: "uk" },
    { locale: "en" },
    { locale: "de" },
    { locale: "da" },
    { locale: "fr" },
    { locale: "it" },
    { locale: "ru" },
    { locale: "sv" },
    { locale: "pl" },
  ];
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
        <meta
          name='viewport'
          as='viewport'
          content='width=device-width, Initial-scale=1.0'
        />
        <meta
          name='description'
          lang='uk'
          content='ЗУБР-2000 – високоякісна деревина з України. . пиломатеріали дуб,  пиломатеріали ясен, пиломатеріали береза, пиломатеріали модрина. Знайдіть ідеальну деревину для вашого проекту.'
        />
        <meta
          name='description'
          lang='ru'
          content='ЗУБР-2000 – високоякісна деревина з України. . пиломатеріали дуб,  пиломатеріали ясен, пиломатеріали береза, пиломатеріали модрина. Знайдіть ідеальну деревину для вашого проекту.'
        />
        <link
          rel='alternate'
          href='https://zubr-2000.com.ua'
          hrefLang='uk-UA'
        />

        <link
          rel='alternate'
          href='https://zubr-2000.com.ua/en'
          hrefLang='en-US'
        />
        <link
          rel='alternate'
          href='https://zubr-2000.com.ua/da'
          hrefLang='da-DA'
        />
        <link
          rel='alternate'
          href='https://zubr-2000.com.ua/de'
          hrefLang='de-DE'
        />
        <link
          rel='alternate'
          href='https://zubr-2000.com.ua/pl'
          hrefLang='pl-PL'
        />
        <link
          rel='alternate'
          href='https://zubr-2000.com.ua/ru'
          hrefLang='ru-RU'
        />
        <link
          rel='alternate'
          href='https://zubr-2000.com.ua/fr'
          hrefLang='fr-FR'
        />
        <link
          rel='alternate'
          href='https://zubr-2000.com.ua/it'
          hrefLang='it-IT'
        />
        <link
          rel='alternate'
          href='https://zubr-2000.com.ua/sv'
          hrefLang='sv-SV'
        />
      </head>
      <body className={font.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Suspense fallback={<Loading />}>
            <div className='wrapper'>
              <Navbar />
              <main className='content'>
                {children} <Analytics />
              </main>
              <BackToTopButton />
            </div>
            <footer>
              <Footer />
            </footer>
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
