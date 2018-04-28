# JavaScript Modules - CommonJs Browser side

[commonjs.org](http://www.commonjs.org/)

The CommonJS module proposal specifies a simple API for declaring modules server-side.

Main advantage over AMD : Compact declarative syntax.

- `exports` contains the objects a module wishes to make available to other modules
- `require` function that modules can use to import the exports of other modules. 

CommonJS can be used with [Browserify](http://browserify.org/).
 
It is a tool built to use CommonJS for frontend development. He reads all the source files, following
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
