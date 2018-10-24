'use strict';

const fs = require("fs");

let data = '';

const rs = fs.createReadStream('stream-read-example-file.txt', {encoding: 'utf8', highWaterMark: 1});

rs.on('data', function(chunk) {
    console.log('chunk = ', chunk);
    data += chunk;
});

rs.on('end',function(){
    console.log("data = ", data);
});

rs.on('error', function(err){
    console.log(err.stack);
});

console.log("stream terminé !");