const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};

// https://velog.io/@ysm6768/SpringBoot-React-%EA%B2%8C%EC%8B%9C%ED%8C%90-3
