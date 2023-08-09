import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ua', 'pl', 'ru', 'it', 'fr', 'de', 'sv', 'da'],

  defaultLocale: 'ua'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};