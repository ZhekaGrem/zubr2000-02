/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    i18n: {
      locales: ['ua', 'de', 'fr','it','da','sv','en','pl', 'ru'],
      defaultLocale: 'ua',
    },
    trailingSlash: true,
  },
};






module.exports = nextConfig;