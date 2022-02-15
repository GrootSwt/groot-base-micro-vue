module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:40101',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
