import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.coachjoshboxing.com',
      },
      {
        protocol: 'https',
        hostname: 'coach-josh-official.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jwplayer.com',
      },
    ],
  },
};

export default nextConfig;
