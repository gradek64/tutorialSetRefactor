const path = require('path')


		/*   
            entry: './src/index.js', //expects string with a starting js file point 
            entry: ['babel-polyfill','./src/index.js'], //expects array of files to run , first is babel-polyfill for converting
                                                        not supported features like async arrow function in all browsers, and then 
                                                        starting point after converting (it requires npm pacakge babel-polyfill)

			module:{} expects object of modules to include
				rules:[{}] expects array with object of  rules to be used;
					test: /\.js$ //expects files to be used in that module with REGEX
					exclude: /node_modules/ //expects what files not used in that module with REGEX
				use:{} what actual module to use 
					loader:'babel-loader' // expects String of name of the loader installed with npm i loader-babel
					options: {} //expects object with option for loader 
						presets:['env'] //expects an array of presets options for loader;


            devServer:{} expects on object with dev-server options;
                contentBase: path.resolve(__dirname, 'public') //expects String the start folder to run server
                contentBase: path.resolve(__dirname, 'public') //expects String where webpack suppose to put its assets for scripts in our case public/scripts 
		    devtool:'source-map' //expects String with mapping to the files for debugging to source files to compiled files (Babel)

		*/
module.exports = {
    //entry: './src/index.js',
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module:{
    	rules:[{
    		test:/\.js$/,
    		exclude: /node_modules/,
    		use: {
    			loader:'babel-loader',
    			options:{
    				presets:['env']
    			}
    		}
    	}]
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/',
    },
    devtool:'source-map',
}