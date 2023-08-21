/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    i18n: {
      locales: ['ua', 'de', 'fr','it','da','sv','en','pl', 'ru'],
      defaultLocale: 'ua',
      localeDetection: false,
    },
    trailingSlash: true,
  },
};






module.exports = nextConfig;