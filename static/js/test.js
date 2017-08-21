//单个模块
// require(['./home/hepler'], function(hepler) {
//     var str = hepler.trim('  44 44    ');
//     console.log(str);
// });
//异步获取json
require(['jquery', 'api', 'i18n!./nls/messages'], function($, api, i18n) {
    $('#userinfo').after('<span class="button orange_bg">' + i18n.edit + '</span>');
    $('.js_submit').click(function() {
        //require实现异步获取json-------------------------------------
        // api.getUser().then(function(user) {
        //     console.log(user);
        // });
        //require实现jsonp-------------------------------------
        // api.getUserByJsonp();
        //require实现text加载html-------------------------------------
        api.loadUser();
    });
});