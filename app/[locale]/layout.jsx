import './globals.css'
import { useLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';



export const metadata = {
  title: 'ZUBR-2000 ',
  description: 'ZUBR-2000',

}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'da' }, { locale: 'fr' }, { locale: 'it' }, { locale: 'ru' }, { locale: 'sv' }, { locale: 'uk' }, { locale: 'pl' }];
}

// export default function RootLayout({ children, params }) {
//   const locale = useLocale();

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  // Show a 404 error if the user requests an unknown locale
  // if (params.locale !== locale) {
  //   notFound();
  // }
  return (

    <html lang={locale}>
      <head>
<meta name='viewport' content='width=device-width' />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
               <div className='wrapper'>
               <nav>
            <Navbar />
          </nav>  
            <main className='content'>
              {children}
            </main>
          </div>
            <footer>
              <Footer />
            </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
