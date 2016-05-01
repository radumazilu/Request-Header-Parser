var http = require('http')
var express = require('express')
var accepts = require('accepts');
var useragent = require('useragent');
var app = express()
var port = Number(process.env.PORT || 3000)

var os = require( 'os' );

app.get('/', function(request, response) {
    var contentType = response.getHeader('content-type');
    var agent = useragent.parse(request.headers['user-agent']);
    response.json({
      ip: request.headers['x-forwarded-for'] || request.connection.remoteAddress,
      language: accepts(request).languages()[0],
      software: agent.os.toString()
    })
});

app.listen(port)
