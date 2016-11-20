var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'./app/containers/index.jsx'
	],
	output: {
		path: __dirname, filename: "app/index_budle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/, 
				exclude: /node_modules/, 
				loader: "babel-loader",
				query:{
					presets: ['react','es2015']
				}
			}
		]
	}
}