module.exports = {
	context: __dirname,
	entry: "./index.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: ['babel-preset-env', 'babel-preset-react'],
						plugins: ["transform-class-properties"]
					}
				}
			}
		]
	}
}