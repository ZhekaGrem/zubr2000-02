/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    i18n: {
      locales: ['default', 'en', 'de', 'fr'],
      defaultLocale: 'default',
      localeDetection: false,
    },
    trailingSlash: true,
  },
};
// const withNextIntl = require('next-intl/plugin')(
//   // This is the default (also the `src` folder is supported out of the box)
//   './i18n.js'
// );



module.exports = nextConfig;