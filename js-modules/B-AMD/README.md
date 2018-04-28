# JavaScript Modules - AMD

AMD is for Asynchronous Module Definition. There is [a specification](https://github.com/amdjs/amdjs-api/blob/master/AMD.md).

Main advantage over CommonJS : Async support.

The AMD module format itself is a proposal for defining modules where both the module and dependencies can be asynchronously loaded.

This is designed to be used in browsers.

AMD module can be JavaScript object, function, constructor, string, but also files (JSON, css, ...) 

```javascript

// add.js

define([], function(){
 
  function add(a, b){
    return a + b;
  } 
 
  return {
    add: add
  };
});

// index.js

require(['add'], function ( add ) {
  add(1, 2); // 3
});

```

- `define` method for facilitating module definition
- `require` method for handling dependency loading

The `define` signature is :

```javascript
define(
    module_id /*optional*/,
    [dependencies] /*optional*/,
    definition function /*function for instantiating the module or object*/
);
```

- The `module_id` string is the module name.
- The `dependencies` array describe the deps to be injected in the `definition` function.
- The `definition` function is a callback called by `define` when the deps are loaded.

AMD main implementation : RequireJS http://requirejs.org
