# ES6 : spread operator

See [ES6+ maintenant ! (Christophe Porteneuve)](https://youtu.be/KJzlllc7Jq8?t=997)

See [ES6, ES2015 : paramètres rest et opérateur spread - putaindecode.io](http://putaindecode.io/fr/articles/js/es2015/rest-spread/)

See [MDN - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

See [ESLint rule : `prefer-spread`](https://eslint.org/docs/rules/prefer-spread)

See [http://kangax.github.io/compat-table for spread operator](http://kangax.github.io/compat-table/es6/#test-spread_(...)_operator)

Substitute for old [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) 'magic' object in function signature.

> **Spread syntax** allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

**Syntax**

For function calls:

```javascript
myFunction(...iterableObj);
```

For array literals or strings:

```javascript
[...iterableObj, '4', 'five', 6];
```

For object literals (**only in ECMAScript 2018 (ES9)**):

```javascript
let objClone = { ...obj };
```
