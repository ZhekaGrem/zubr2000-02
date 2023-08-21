import "@/app/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {Montserrat} from "@next/font/google";


const font = Montserrat({
  weight : '600',
  display : 'swap',
  subsets: ['latin-ext']
})

export const metadata = {
  title: "ZUBR-2000 ",
  description:
    "Discover high-quality lumber for sale at ZUBR-2000. We offer a wide selection of timber, perfect for various projects. Browse our best lumber store and find the perfect match for your needs. ",
  keywords: [
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
    icon: ['./favicon.ico'],
    apple: ['./favicon.ico'],
    shortcut: ['./favicon.ico'],
  },
};

export function generateStaticParams() {
  return [
    { locale: "ua" },
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
        <meta name="viewport"  as="viewport" content="width=device-width" />
        <link rel="icon" as="icon" href="./favicon.ico" sizes="any" />
        <link rel="alternate"  as="alternate" href="https://zubr-2000.com.ua" />
        <link
        as="alternate"
          rel="alternate"
          href="https://zubr-2000/en.com.ua"
        />
        <link
        as="alternate"
          rel="alternate"
          href="https://zubr-2000/da.com.ua"
        />
        <link
        as="alternate"
          rel="alternate"
          href="https://zubr-2000/de.com.ua"
        />
        <link
        as="alternate"
          rel="alternate"
          href="https://zubr-2000/pl.com.ua"
        />
        <link
        as="alternate"
          rel="alternate"
          href="https://zubr-2000/ru.com.ua"
        />
        <link
        as="alternate"
          rel="alternate"
          href="https://zubr-2000/fr.com.ua"
        />
        <link
        as="alternate"
          rel="alternate"
          href="https://zubr-2000/it.com.ua"
        />
        <link
        as="alternate"
          rel="alternate"
          href="https://zubr-2000/sv.com.ua"
        />
      </head>
      <body className={font.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="wrapper">
            <Navbar />
            <main className="content">{children}</main>
          </div>
          <footer>
            <Footer />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
