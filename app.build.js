({
	appDir:'./static',
	baseUrl:'./js',
	dir:'./build',
	mainConfigFile:'./static/js/require.config.js',
	//name:'test'//单模块
	inlineText:false,
	// modules:[{
	// 	name:'home/test'
	// 	//exclude:['./app/api']//排除打包
	// 	//excludeShallow:['./app/api']//包含打包
	// 	//insertRequire:['./app/api']//排除，单独加载
	// },{
	// 	name:'home/user'
	// },{
	// 	name:'test'
	// }]
	modules:[{
		name:'test'
		//exclude:['./app/api']//排除打包
		//excludeShallow:['./app/api']//包含打包
		//insertRequire:['./app/api']//排除，单独加载
	},{
		name:'home/user'
	}]
})