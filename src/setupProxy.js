const { createProxyMiddleware } = require('http-proxy-middleware')

let ip = 'http://210.73.218.173:8899/';// development


module.exports = function (app) {
  app.use('/api', createProxyMiddleware( {
    target: ip,
    secure: false,
    changeOrigin: true,
    // pathRewrite: {
    //   "^/api": ""
    // }
  })),
  app.use('!^/api', createProxyMiddleware( {
    target: ip,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
        '^/aa': '/'
      }
  }))
}