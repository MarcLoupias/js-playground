# ES6 : rest parameters

See [ES6+ maintenant ! (Christophe Porteneuve)](https://youtu.be/KJzlllc7Jq8?t=997)

See [ES6, ES2015 : paramètres rest et opérateur spread - putaindecode.io](http://putaindecode.io/fr/articles/js/es2015/rest-spread/)

See [MDN - Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

See [ESLint rule : `prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)

See [http://kangax.github.io/compat-table for rest parameters](http://kangax.github.io/compat-table/es6/#test-rest_parameters)

Substitute for old [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) 'magic' object in function signature.

> The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
> 
> If the last named parameter of a function is prefixed with `...`, it becomes an array whose elements from `0` (inclusive) to `theArgs.length` (exclusive) are supplied by the actual arguments passed to the function.
> 
> ```javascript
> function f(a, b, ...theArgs) {
>   // ...
> }
> ```
> 
> In the above example, `theArgs` would collect the third argument of the function (because the first one is mapped to `a`, and the second to `b`) and all the consecutive arguments.
> 
> **Difference between rest parameters and the `arguments` object**
> 
> 3 main differences :
> - rest parameters are only the ones that haven't been given a separate name while the `arguments` object contains all arguments passed to the function
> - the `arguments` object is not a real array, while rest parameters are `Array` instances, meaning methods like `sort`, `map`, `forEach` or `pop` can be applied on it directly
> - the `arguments` object has additional functionality specific to itself (like the `callee` property)
> 
