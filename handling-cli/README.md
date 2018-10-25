# Node.js - handling CLI

## `commander` package

Using [commander](https://github.com/tj/commander.js), the most used package to write CLI apps.

[Examples here](https://github.com/tj/commander.js/tree/master/examples).

## `bin` prop in `package.json`

Allows to rename the bin name placed in `node_modules/.bin/` after package installation.

[`package.json` `bin` property in docs.npmjs.com](https://docs.npmjs.com/files/package.json#bin)

> Please make sure that your file(s) referenced in `bin` starts with `#!/usr/bin/env node`, otherwise the scripts are started without the node executable!

## testing CLI tool

### testing tools

[mocha](https://mochajs.org/)

[chai](https://www.chaijs.com)

### testing sync

[Setting up your tests to run spawn subprocesses - stackoverflow.com](https://stackoverflow.com/a/43676950)

Cf [`child_process.spawnSync(command[, args][, options])`](https://nodejs.org/api/child_process.html#child_process_synchronous_process_creation)

### testing async

[Integration tests on Node.js CLI: Part 1 — Why and how?](https://medium.com/@zorrodg/integration-tests-on-node-js-cli-part-1-why-and-how-fa5b1ba552fe)

