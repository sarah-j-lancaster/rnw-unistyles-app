const path = require('path');

module.exports = {
  reactStrictMode: true,
  transpilePackages: ['react-native-unistyles'],
  webpack: (config) => {
    config.resolve.alias['react-native$'] = 'react-native-web';
    config.resolve.extensions.push('.web.ts', '.web.tsx', '.ts', '.tsx', '.js');
    return config;
  },
};
