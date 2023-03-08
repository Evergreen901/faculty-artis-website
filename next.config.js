/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  // output: 'standalone', // for deploy with docker
  reactStrictMode: true,
  swcMinify: true,
  i18n,
};

module.exports = nextConfig;
