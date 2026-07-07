import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['uk', 'en',  'pl', 'ru', 'it', 'fr', 'de', 'sv', 'da'],

  defaultLocale: 'uk',
  localePrefix: 'always',
  localeDetection: true,
  // hreflang is emitted once, via Next.js Metadata (alternates.languages in
  // app/_lib/seo.js) as <link> tags in the HTML head. Disabling next-intl's
  // duplicate HTTP `Link` header avoids a conflicting x-default annotation
  // (which Google ignores entirely when sources disagree).
  alternateLinks: false
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};