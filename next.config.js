const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    emotion: true,
    relay: require('./relay.config'),
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'ko-KR'],
    defaultLocale: 'en-US',
  },
  // webpack: (config, {isServer, webpack}) => {
  //   if (!isServer) {
  //     // Ensures no server modules are included on the client.
  //     config.plugins.push(new webpack.IgnorePlugin({resourceRegExp: /server/}));
  //   }

  //   return config;
  // },
};

module.exports = nextConfig;
