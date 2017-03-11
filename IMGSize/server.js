var http = require("http");
var url = require('url');
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');
var port = process.env.PORT || 8080;


http.createServer(function(request, response) {
  if(request.url == '/upload' && request.method.toLowerCase()=='post'){
    var form = new formidable.IncomingForm();
    form.parse(request, function(err, fields, files){
      response.writeHead(200, {'content-type': 'text/plain'});
      response.write('received upload\n\n');
      response.end(util.inspect(files));
    })}
    else{
    fs.readFile("index.html", function(err, data){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
    })}
    })
.listen(port);