module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      // 需要代理的路径
      '/api': {
        target: 'https://127.0.0.1/',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
