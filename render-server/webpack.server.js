const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
	// Inform webpack that we are building a bundle for
	// nodejs, rather than for the browser
	target: "node",

	// tell webpack the root of our
	// server application
	entry: "./src/index.js",

	// tell webpack where to put the output file
	// that is generated
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build")
	},

	resolve: {
    	extensions: ['.js', '.jsx']
 	},

 	externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig,config);