/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // Old multi-page routes now live as sections on the home page; keep any existing links and rankings.
  async redirects() {
    return [
      { source: "/AboutUs", destination: "/#about", permanent: true },
      { source: "/ContactUs", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
