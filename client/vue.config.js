module.exports = {
	publicPath: './',
	configureWebpack: {
	  devServer: {
		proxy: 'http://localhost:8888'
	  }
	}
  }