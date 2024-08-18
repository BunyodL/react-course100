const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/images': path.resolve(__dirname, 'src/assets/images'),
      '@/icons': path.resolve(__dirname, 'src/assets/icons'),
      '@/gifs': path.resolve(__dirname, 'src/assets/gifs'),
      '@/logo': path.resolve(__dirname, 'src/assets/logo'),
    }
  }
};
