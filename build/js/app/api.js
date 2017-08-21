define(['jquery','text!/html/textIndex.html!strip'],function($,template){
	return{
		getUser:function(){
			var def=$.Deferred();
			require(['./app/user'],function(user){
				def.resolve(user);
			});
			return def;
		},
		getUserByJsonp:function(){
			// $.ajax({
			// 	url:'http://localhost:3005/src/js/jsonp/user.js',
			// 	dataType:'jsonp',
			// 	jsonCallback:'onloaded',
			// 	success:function(data){
			// 		console.log(data);
			// 	}
			// })
			require(['http://localhost:3005/src/js/jsonp/user_amd.js'],function(user){
				console.log(user);
			})
		},
		loadUser:function(){
			// require(['text!/html/textIndex.html!strip'],function(template){
			// 	$('#userinfo').html(template);
			// })
			$('#userinfo').html(template);
		}
	}
});
// function onloaded(user){
// 	console.log(user);
// }