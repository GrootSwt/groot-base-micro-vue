module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:60001',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
