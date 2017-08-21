//document.cookie='language=zh_CN'
//document.cookie='language=en_US'
var language = document.cookie.match(/language=([^;]+)/);
var locale = 'zh-cn';
if (language) {
    locale = language[1].split('_')[0];
}
//node r.js -o baseUrl=home name=user out=built.js
//r.js.cmd -o baseUrl=home name=user out=built.js
//node r.js -o app.build.js
requirejs.config({
    baseUrl: '../static/js',
    urlArgs: '_=' + new Date().getTime(), //链接加后缀
    paths: {
        "jquery": "plug/jquery-2.1.4.min",
        //"hepler": './home/hepler',
        "api": "app/api",
        "messages": "nls/messages",
        "text": 'plug/require/text',
        "css": 'plug/require/css', //引入css文件
        "i18n": 'plug/require/i18n',
    },
    map: { //更改jquery版本
        // 'app/api': {
        //     "jquery": "plug/jquery-2.1.4.min",
        // },
        // 'app/api2': {
        //     "jquery": "plug/jquery-1.7.2.min",
        // }
        '*':{
            'css':'plug/require/css'
        }
    },
    waitSeconds: 0, //下载超时
    config: {
        text: {
            onXhr: function(xhr, url) {
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

            }
            // createXhr: function(xhr, url) {

            // },
            // onXhrComplete: function(xhr, url) {

            // }
        },
        i18n: { //多语言
            locale: typeof locale !== 'undefined' ? locale : 'zh'
        }
    }
});