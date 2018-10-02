1) To run react you dont need server, all you need is code 
	compiler as babel and modular converter as webpack:

	in this example we used : babel and webpack with webpack loaders 
	as babel-loader and xml-loader;

	Setup: 
	 1)  install babel-c npm pacakages as:
	    no need for babel-cli (to run babel in command line)
	 2) install babel presets for transpiling to right format 
		npm i babel-preset-env -S 
		npm i babel-preset-react -S
	2) install babel core packages and babel -loader for webpack 
		npm i babel-core -S 
		npm i babel-loader -S
	3) add that to your package.json or make .babelrc file

		  --------------- package.json part---------------

		"babel": {
		    "presets": [
		      "env", "react"
		    ]
		}
		--------------------------------------------------

	4) create webpack.config.js for webpack entry points (minimum setup);
	   and modules to work with

		module.exports = {
		  entry: './scripts/main.js',
		  module: {
		      rules: [
		        {
		          test: /\.js$/,
		          exclude: /node_modules/,
		          use: {
		            loader: "babel-loader"
		          }
		        }
		      ]
		   },
		  output: {
		    filename: 'bundle.js',
		    path:__dirname
		}
};
	
	4a) you can add more modules to your configuration just make sure the order is the one you need for your project;

		module.exports = {
		  entry: './scripts/main.js',
		  module: {
		      rules: [
		        {
		          test: /\.js$/,
		          exclude: /node_modules/,
		          use: {
		            loader: "babel-loader"
		          }
		        }
		      ]
		   },
		  output: {
		    filename: 'bundle.js',
		    path:__dirname
		}
	};
	
	5) run webpack to convert node modules to browser format 

		./node_modules/.bin/webpack

	6) shorthanded in package.json scripts tags for speeding


	"scripts": {
    		"webpackMe": "webpack"
  		},
			