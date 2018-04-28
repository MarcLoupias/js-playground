# JavaScript Modules - CommonJs with Node.js

[commonjs.org](http://www.commonjs.org/)

The CommonJS module proposal specifies a simple API for declaring modules server-side.

Main advantage over AMD : Compact declarative syntax.

- `exports` contains the objects a module wishes to make available to other modules
- `require` function that modules can use to import the exports of other modules. 

CommonJS is the builtin **Node.js** module system.
 
A module exports can only be a JavaScript object. [See Node.js doc](https://nodejs.org/dist/latest-v8.x/docs/api/modules.html#modules_module_exports).

A module is automatically wrapped in an anonymous function :

```javascript
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});
```

So top level variables in a CommonJS module are scoped to the module rather than the global object. 

[See Node.js doc](https://nodejs.org/dist/latest-v8.x/docs/api/modules.html#modules_the_module_wrapper)

Notice that Node.js is caching exports, so if you exports a primitive, the value is copied by value. [Cf this stackoverflow question](https://stackoverflow.com/questions/38972252/how-does-commonjs-make-two-copies-during-its-export-and-require-process).

[Browserify](http://browserify.org/) is a tool built to use CommonJS for frontend development. He reads all the source files, following
the require instruction, and concat all files in a single one (a *bundle*) to be linked in the app.

The verbose AMD syntax is not needed anymore, and we can have consistency in modules definitions between frontend and backend.

```javascript

// add.js

function add (a, b) {
    return a + b
}

module.exports = add;

// index.js

var add = require('add');

add(1, 2); // 3

```
