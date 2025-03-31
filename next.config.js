/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    i18n: {
      locales: ["uk", "de", "fr", "it", "da", "sv", "en", "pl", "ru"],
      defaultLocale: "uk",
    },
    images: {
      // Указываем долгое время кэширования для изображений, поскольку они уже оптимизированы
      minimumCacheTTL: 60 * 60 * 24 * 7, // 7 дней

      unoptimized: true,
    },
    trailingSlash: true,
  },
};






