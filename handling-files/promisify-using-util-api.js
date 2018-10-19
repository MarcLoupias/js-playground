'use strict';

const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

writeFile("test3.tmp", "console.log('Hello world with promisify!');")
    .then(() => console.log("file created successfully with promisify!"))
    .catch(error => console.log(error));