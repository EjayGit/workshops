/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns:[{
      protocol:"https",
      hostname: "external-content.duckduckgo.com",
      port: "",
      pathname: "/**",
    },],
  },
};

export default nextConfig;
