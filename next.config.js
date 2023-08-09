/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    i18n: {
      locales: ['default', 'en', 'de', 'fr','it','da','sv','ua','pl', 'ru'],
      defaultLocale: 'default',
      localeDetection: false,
    },
    trailingSlash: true,
  },
};






module.exports = nextConfig;