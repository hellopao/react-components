var path = require('path');

var webpack = require('webpack');

var distPath = path.join(__dirname,'test');

module.exports = {
	entry: {
		index: ["./test/index.jsx"],
	},
	output: {
		path: distPath,
		filename: '[name].js',
		publicPath: distPath
	},
	module: {
		loaders: [
			{ 
				test: /\.jsx/, 
				exclude: /node_modules/,
				loader: "jsx?harmony" 
			},
            { 
				test: /\.scss$/, 
				loader: "style!css!sass" 
			},
			{
				test: /\.css$/, 
				loader: "style!css" 
			}
		]
	},
	resolve: {
		extension:['','.js','.jsx','.scss','.css']
	}
}