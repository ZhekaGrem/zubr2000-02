import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'uk', 'pl', 'ru', 'it', 'fr', 'de', 'sv', 'da',],

  defaultLocale: 'uk'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};