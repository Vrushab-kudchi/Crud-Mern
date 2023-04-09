const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://185.210.144.13:3001',
      changeOrigin: true,
    })
  );
};
