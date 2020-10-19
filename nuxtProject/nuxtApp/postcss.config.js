const tailwindConfig = require("./tailwind.config");
module.exports = {
	ident: 'postcss',
	plugins: [
			require('tailwindcss')(tailwindConfig),
			require('autoprefixer')
	]
}