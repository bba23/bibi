/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'bibi',
    description: 'The unofficial store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://bba23.github.io/bibi/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/bibi/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
