const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  //api
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:8089/',
      pathRewrite: {
        '^/api': '',
      },
      changeOrigin: true,
      secure: false,
      ws: false,
    })
  );
};
