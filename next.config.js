/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  webpack: (config) => {
    // Ignore legacy src/pages directory from build
    config.module.rules.push({
      test: /src[\\/]pages[\\/].*\.(ts|tsx)$/,
      use: 'ignore-loader',
    });
    return config;
  },
};

module.exports = nextConfig;
