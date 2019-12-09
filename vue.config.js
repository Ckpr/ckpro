module.exports = {
  proxyTable: {
    '/list': {
      target: 'https://www.so.com/',
      changeOrigin: true,
      pathRewrite: { '^/list': '' }
    }
  }
}
