import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['uk', 'en',  'pl', 'ru', 'it', 'fr', 'de', 'sv', 'da'],

  defaultLocale: 'uk',
  localeDetection: true
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};