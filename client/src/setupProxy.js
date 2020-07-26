const { createProxyMiddleware } = require('http-proxy-middleware');
// import createProxyMiddleware from 'http-proxy-middleware';

module.exports = function (app) {
  app.use(
    '/auth/google',
    createProxyMiddleware({
      target: 'http://localhost:5000/',
    }),
    '/api/*',
    createProxyMiddleware({
      target: 'http://localhost:5000/',
    }),
  );
};
