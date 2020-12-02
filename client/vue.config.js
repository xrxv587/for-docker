const path = require('path');

module.exports = {
	outputDir: path.resolve(__dirname, '../server/dist'),
	lintOnSave: false,
	publicPath: './',
	configureWebpack: {
	  devServer: {
		proxy: 'http://localhost:8888'
	  }
	}
  }