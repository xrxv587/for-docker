module.exports = {
	lintOnSave: false,
	publicPath: './',
	configureWebpack: {
	  devServer: {
		proxy: 'http://localhost:8888'
	  }
	}
  }