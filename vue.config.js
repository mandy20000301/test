const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import "@/assets/sass/main.scss";`,
			},
		},
	},
	publicPath: process.env.NODE_ENV === 'production'
		? '/xita/'
		: '/',
	productionSourceMap: false,
	filenameHashing: false
})
