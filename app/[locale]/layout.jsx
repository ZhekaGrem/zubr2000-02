import "@/app/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { BackToTopButton } from "../components/BackToTop/BackToTopButton";
import { Source_Sans_3, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import Loading from "./loading";

export const fontSans = Source_Sans_3({
  weight: ["300", "400", "500", "600"],
  display: "swap",
  subsets: ["latin-ext"],
  variable: "--font-source",
});
export const fontSerif = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin-ext"],
  variable: "--font-serif",
});



const meta = {
  title: "ZUBR-2000 | Premium Ukrainian Lumber - Oak, Ash, Birch, Larch | Пиломатеріали України",
  description:
    "ZUBR-2000 offers premium Ukrainian lumber since 2000. High-quality oak, ash, birch & larch timber. Direct from manufacturer. Best prices, certified quality. ЗУБР-2000 - провідний виробник пиломатеріалів в Україні. Дуб, ясен, береза, модрина найвищої якості.",
  image: "https://www.zubr-2000.com.ua/photo_tittl_%E2%84%961.1.webp",
};

export const metadata = {
  alternates: {
    canonical: '/en',
    languages: {
      'en': '/en',
      'uk': '/uk',
      'pl': '/pl',
      'de': '/de',
    },
  },
  name: "ZUBR-2000 | ЗУБР-2000",
  short_name: [
    "зубр",
    "зубр 2000",
    "zubr 2000",
    "зубр2000",
    "zubr2000",
    "zubr-2000",
    "oak lumber",
    "ash lumber",
    "ukrainian lumber",
    "дерево україна",
    "пиломатеріали",
  ],
  title: meta.title,
  description: meta.description,
  applicationName: 'ZUBR-2000 Lumber Company',
  authors: [{ name: 'ZUBR-2000', url: 'https://zubr-2000.com.ua' }],
  generator: 'Next.js',
  publisher: 'ZUBR-2000',
  creator: 'ZUBR-2000',
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://zubr-2000.com.ua/en",
    locale: "en_US",
    alternateLocale: ["uk_UA", "pl_PL", "de_DE"],
    siteName: "ZUBR-2000 Lumber Company",
    type: "website",
    images: [
      {
        url: "https://www.zubr-2000.com.ua/photo_tittl_%E2%84%961.1.webp",
        width: 1200,
        height: 630,
        alt: "ZUBR-2000 Premium Ukrainian Lumber",
        type: "image/webp",
      },
      {
        url: "https://www.zubr-2000.com.ua/lumber-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Oak, Ash, Birch, Larch Lumber from Ukraine",
      }
    ],
  },
  
  keywords: [
    // Ukrainian keywords
    "пиломатеріали україна",
    "пиломатеріали купити",
    "дуб пиломатеріали",
    "ясен пиломатеріали",
    "береза пиломатеріали",
    "модрина пиломатеріали",
    "деревина україна",
    "дошка дубова",
    "дошка ясенева",
    "брус дубовий",
    "експорт деревини україна",
    "виробник пиломатеріалів",
    "лісоматеріали україна",
    "ЗУБР-2000",
    "зубр 2000",
    "зубр пиломатеріали",
    
    // English keywords
    "ukrainian lumber",
    "ukraine timber export",
    "oak lumber ukraine",
    "ash lumber ukraine",
    "birch lumber ukraine",
    "larch lumber ukraine",
    "hardwood lumber supplier",
    "european oak lumber",
    "wholesale lumber ukraine",
    "lumber manufacturer ukraine",
    "timber supplier ukraine",
    "wood export ukraine",
    "kiln dried lumber",
    "ZUBR-2000",
    "zubr lumber",
    
    // Polish keywords
    "tarcica ukraina",
    "drewno ukraina",
    "dąb tarcica",
    "jesion tarcica",
    "brzoza tarcica",
    "modrzew tarcica",
    "eksport drewna ukraina",
    "producent tarcicy",
    
    // German keywords
    "schnittholz ukraine",
    "holz ukraine",
    "eiche schnittholz",
    "esche schnittholz",
    "birke schnittholz",
    "lärche schnittholz",
    "holzexport ukraine",
    "sägewerk ukraine",
    
    // Italian keywords
    "legname ucraina",
    "legno ucraina",
    "quercia legname",
    "frassino legname",
    "betulla legname",
    "larice legname",
    
    // Location-specific
    "lumber ukraine",
    "timber ukraine",
    "wood ukraine",
    "пиломатеріали львів",
    "пиломатеріали київ",
    "lumber lviv",
    "lumber kyiv",
    
    // Product-specific long-tail keywords
    "buy oak lumber ukraine",
    "ash wood planks ukraine",
    "birch timber wholesale",
    "larch boards supplier",
    "european hardwood lumber",
    "certified lumber ukraine",
    "FSC certified timber",
    "sustainable wood ukraine",
    
    // Commercial intent keywords
    "lumber prices ukraine",
    "timber wholesale ukraine",
    "bulk wood purchase",
    "lumber factory direct",
    "wood supplier b2b",
    "пиломатеріали ціна",
    "дерево оптом",
    "купити дошку недорого",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  category: 'business',
  classification: 'Business',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
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
      <body className={`${fontSans.variable} ${fontSerif.variable}`}>
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
