/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/posts/:id",
        destination: "/heroes/:id",
        permanent: false, //dynamic path matching
      },
    ];
  },
};

module.exports = nextConfig;
