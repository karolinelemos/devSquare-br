module.exports = {
	entry: "./app/App.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		rules: [
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ],
		loaders: [
			{
				test: /\.js$/,
				exclude: './node_modules',
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
	    test: /\.css$/,
	    loaders: [
	        'style?sourceMap',
	        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
				    ]
			},
			{
			  test: /\.(jpg|png)$/,
			  loader: 'file-loader',
			  options: {
			    name: '[path][name].[hash].[ext]',
			  }
			}
		]
	}
}
