/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    i18n: {
      locales: ['uk', 'de', 'fr','it','da','sv','en','pl', 'ru'],
      defaultLocale: 'uk',
    },
    trailingSlash: true,
  },
};






module.exports = nextConfig;