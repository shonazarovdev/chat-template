const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
	addWebpackAlias({
		'@assets': path.resolve(__dirname, 'src/assets'),
		'@components': path.resolve(__dirname, 'src/components'),
		'@contexts': path.resolve(__dirname, 'src/contexts'),
		'@data': path.resolve(__dirname, 'src/data'),
		'@hooks': path.resolve(__dirname, 'src/hooks'),
		'@layouts': path.resolve(__dirname, 'src/layouts'),
		'@pages': path.resolve(__dirname, 'src/pages'),
		'@routes': path.resolve(__dirname, 'src/routes'),
		'@theme': path.resolve(__dirname, 'src/theme'),
		'@utils': path.resolve(__dirname, 'src/utils'),
		// добавьте другие алиасы по необходимости
	})
);