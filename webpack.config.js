var webpack = require("webpack");
var config = require('config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//var jsxLoader = (config.get('env') === 'development') ? 'react-hot!babel!es2015' : 'babel!es2015';
//console.log("Loader "+jsxLoader)
var configuration = {
	//watch:true,
	devtool: 'inline-eval-cheap-source-map',
	//entry:'./src/entry.js',
	entry: {
		main: ['./src/entry.js'],
		vendor: ['react', 'react-dom', 'react-redux', 'redux'],
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/dist/',
		filename: '[name].js',
	},
	devServer: {
		contentBase: __dirname
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style!css'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"],
			},
			{
				test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&minetype=application/font-woff"
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		new webpack.optimize.CommonsChunkPlugin(
			/* chunkName= */"vendor",
			/* filename= */"vendor.bundle.js"
		),
		new HtmlWebpackPlugin({
			title: 'Scallywag',
			template: 'index.html',
			hash:true,
			favicon: './src/images/favicon/favicon.ico'
		})
	]
}

/*
 if (config.env === 'development') {
 configuration.entry.main.unshift(
 'webpack/hot/dev-server'//,
 //'webpack-hot-middleware/client'
 );
 configuration.plugins.push(new webpack.HotModuleReplacementPlugin());
 }
 */
module.exports = configuration;