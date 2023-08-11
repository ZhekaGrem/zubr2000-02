import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ua', 'en',  'pl', 'ru', 'it', 'fr', 'de', 'sv', 'da'],

  defaultLocale: 'ua'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};