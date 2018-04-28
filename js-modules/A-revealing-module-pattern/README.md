# JavaScript Modules - Revealing Module Pattern

```javascript

// my-module.js

var myModule = (function() {
  return {
    "add": function(a, b) {
      return a + b;
    }
  };
})();

// index.js

myModule.add(1, 2); // 3
```
