/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    i18n: {
      locales: ['default', 'ua', 'de', 'fr','it','da','sv','en','pl', 'ru'],
      defaultLocale: 'default',
      localeDetection: false,
    },
    trailingSlash: true,
  },
};






module.exports = nextConfig;