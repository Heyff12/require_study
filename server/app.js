'use strict';
//通过require将http库包含到程序中
var http = require('http');
//引入url模块解析url字符串
var url = require('url');
//引入querystring模块处理query字符串
var querystring = require('querystring');
//创建新的HTTP服务器
var server = http.createServer();
var express = require('express');
var app = express();
// //设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/jsonp/html5', function(req, res) {
    var data = {
        "name": "Monkey+html5"
    };
    res.send(data);
});
//jsonp 跨域
app.get('/jsonp/testjsonp/haha', function(req, res) {
    var urlPath = url.parse(req.url).pathname;
    //console.log(req.url);
    //console.log(url.parse(req.url));
    var qs = querystring.parse(req.url.split('?')[1]);
    //console.log(qs);
    //jsonp----跨域设置
    if (urlPath === '/jsonp/testjsonp/haha' && qs.callback) {
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
        var data = {
            "name": "Monkey"
        };
        data = JSON.stringify(data);
        var callback = qs.callback + '(' + data + ');';
        res.end(callback);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end('Hell World\n');
    }
})
//通过request事件来响应request请求
// server.on('request', function(req, res) {
//     var urlPath = url.parse(req.url).pathname;
//     //console.log(req.url);
//     //console.log(url.parse(req.url));
//     var qs = querystring.parse(req.url.split('?')[1]);
//     //console.log(qs);
//     //jsonp----跨域设置
//     if (urlPath === '/jsonp/testjsonp/haha' && qs.callback) {
//         res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
//         var data = {
//             "name": "Monkey"
//         };
//         data = JSON.stringify(data);
//         var callback = qs.callback + '(' + data + ');';
//         res.end(callback);
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
//         res.end('Hell World\n');
//     }
//     //	请求头----跨域设置
//     if (urlPath === '/jsonp/html5') {   
//         // res.setHeader("Access-Control-Allow-Origin", "*");
//         // res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); 	
//         res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS' });
//         //res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
//         var data = {
//             "name": "Monkey+html5"
//         };
//         data = JSON.stringify(data);
//         console.log(data);
//         res.end(data);
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
//         res.end('Hell World\n');
//     }
// });
//监听8080端口
app.listen('3004');
//用于提示我们服务器启动成功
console.log('Server running http://localhost:3004/!');




// 'use strict';
// //通过require将http库包含到程序中
// var http = require('http');
// //创建新的HTTP服务器
// var server = http.createServer();
// //通过request事件来响应request请求
// server.on('request', function(req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     //res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     // res.header("X-Powered-By",' 3.2.1')
//     // res.header("Content-Type", "application/json;charset=utf-8");

//     res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
//     var data = {
//         "name": "Monkey"
//     };
//     res.end(data);

//     // var urlPath = url.parse(req.url).pathname;
//     // //如果urlPath为'jsonp'，就认定该请求为携带jsonp方法的http请求
//     // if(urlPath === '/jsonp'){
//     //     res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
//     //     var data = {
//     //         "name": "Monkey"
//     //     };
//     //     data = JSON.stringify(data);
//     //     //假设我们定义的回调函数名为test
//     //     var callback = 'test'+'('+data+');';
//     //     res.end(callback);
//     // }
//     // else{
//     //     res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
//     //     res.end('Hell World\n');    
//     // }        
// });
// //监听8080端口
// server.listen('3004');
// //用于提示我们服务器启动成功
// console.log('Server running http://localhost:3004/!');