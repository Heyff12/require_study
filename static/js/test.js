//单个模块
// require(['./home/hepler'], function(hepler) {
//     var str = hepler.trim('  44 44    ');
//     console.log(str);
// });
//异步获取json
require(['jquery', 'api', 'i18n!./nls/messages', 'css!/static/css/home.css'], function($, api, i18n) {
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
    //跨域
    $('.js_ajaxp').click(function() {
        $.ajax({
            //url: 'http://182.92.75.69:3000/goods/list?page=1&pageSize=8&sort=1&priceLevel=all',
            url: 'http://127.0.0.1:3004/jsonp/testjsonp/haha',
            type: 'GET',
            dataType: 'jsonp',
            success: function(data) {
                console.log(data);
                $('#ajaxinfo').html(data.name);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                //$('.alert_con .alert_con_br').html('XMLHttpRequest.readyState:'+XMLHttpRequest.readyState+',XMLHttpRequest.status:'+XMLHttpRequest.status+',textStatus:'+textStatus+'!');
                alert('网络超时!');
            },
        });
    });
    $('.js_ajax').click(function() {
        $.ajax({
            //url: 'http://182.92.75.69:3000/goods/list?page=1&pageSize=8&sort=1&priceLevel=all',
            url: 'http://127.0.0.1:3004/jsonp/html5',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                $('#ajaxinfo').html(data.name);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                //$('.alert_con .alert_con_br').html('XMLHttpRequest.readyState:'+XMLHttpRequest.readyState+',XMLHttpRequest.status:'+XMLHttpRequest.status+',textStatus:'+textStatus+'!');
                alert('网络超时!');
            },
        });
    });
    

    //jsonp跨域原理-------------- 
    //动态创建script标签，并请求
    function addScriptTag(src) {
        console.log('eeeee');
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.src = src;
        document.body.appendChild(script);
    };
    //如：在onload后，跨域请求
    // $(document).ready(function(){
    //     addScriptTag('http://127.0.0.1:3004/jsonp/testjsonp/haha?callback=monkey');
    // });
    window.onload = function() {
        addScriptTag('http://127.0.0.1:3004/jsonp/testjsonp/haha?callback=monkey');
    };
    //回调的方法,且必须为全局方法，不然会报错
    function monkey(data) {
        console.log(data);
    };
});