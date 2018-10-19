'use strict';

const fs = require("fs");

fs.writeFile("test.tmp", "console.log('Hello world');", error => {
    if (error) console.error(error);
    else console.log("file created successfully!");
});
