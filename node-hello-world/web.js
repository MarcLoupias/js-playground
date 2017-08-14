var http = require("http");

var port = 3000;

http.createServer(function(reqst, resp) {
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end('Hello World!');
}).listen(port);

console.log('Load http://127.0.0.1:' + port + ' and watch the magic');
