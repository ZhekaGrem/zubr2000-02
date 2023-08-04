
import '@/app/styles/globals.css'
import {  NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';



export const metadata = {
  icons: {
    icon: '../favicon.ico',
  },
  title: 'ZUBR-2000 ',
  description: "sale of timber" ,
 
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'da' }, { locale: 'fr' }, { locale: 'it' }, { locale: 'ru' }, { locale: 'sv' }, { locale: 'uk' }, { locale: 'pl' }];
}


export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (

    <html lang={locale}>
      <head>
        <meta name='viewport' content='width=device-width' />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className='wrapper'>
            
              <Navbar />
            
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
