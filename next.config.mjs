/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: ["localhost"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
        },
        {
          protocol: "https",
          hostname: "wineninjas.org",
        },
        {
          protocol: "https",
          hostname: "www.hoteljob.vn",
        },
        {
          protocol: "https",
          hostname: "domf5oio6qrcr.cloudfront.net",
        },
      ],
    },
  };
  
  export default nextConfig;
