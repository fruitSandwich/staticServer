/**
 * Created by dujiaheng on 2017/6/20.
 */

var http = require('http');
var express = require('express');
var app = express();
app.use("/", express.static(__dirname + '/static'));
app.use("/health",function(req,res){
	res.send({"status":"UP"})
})
// 创建服务端
http.createServer(app).listen('8080', function () {
    console.log('service is running...');
});