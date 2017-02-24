var webpack = require('webpack');
var path = require('path');
var libraryName = 'library';
var outputFile = libraryName + '.js';

module.exports = {
	entry: [ __dirname + '/src/index.js'],
	devtool: 'source-map',
	output: {
		path: __dirname + '/lib',
		filename: outputFile,
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [{
			test: /(\.js)$/,
			use: 'babel-loader',
			exclude: /node_modules/
		}]
	}
};