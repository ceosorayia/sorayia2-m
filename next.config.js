const nextConfig = {
  reactStrictMode: true, // Active le mode strict de React
  eslint: {
    ignoreDuringBuilds: true, // Ignore les erreurs ESLint lors du build
  },
  images: {
    domains: ['example.com'], // Configuration pour les images externes
  },
};

module.exports = nextConfig;
