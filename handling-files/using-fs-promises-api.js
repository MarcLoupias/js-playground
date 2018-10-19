'use strict';

const fsp = require("fs").promises;

async function main() {
    await fsp.writeFile("test5.tmp", "console.log('Hello world with Node.js v10 fs/promises!'");
    console.info("File created successfully with Node.js v10 fs/promises!");
}

main().catch(error => console.error(error));