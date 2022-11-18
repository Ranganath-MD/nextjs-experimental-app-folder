/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/todos",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
