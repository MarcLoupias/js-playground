# ES6 : iterators

See [Iterators - Iterator & For-Of Operator](http://es6-features.org/#IteratorForOfOperator)

See [Iterators in JavaScript using Quokka.js - Fun Fun Function](https://www.youtube.com/watch?v=W4brAobC2Hc&list=PL0zVEGEvSaeG2T5n8FuPGb11JHea7idb9&index=1)

See [ES6, ES2015 : itérateurs et générateurs - putaindecode.io](https://putaindecode.io/fr/articles/js/es2015/generators/)

See [ES6, ES2015 : la boucle for..of - putaindecode.io](https://putaindecode.io/fr/articles/js/es2015/for-of/)

Primary building block for `for of` loop and generators.

`for in` loop yields only the item index (stringly typed)

```javascript
const obj = { foo: "hello", bar: "world" };

for (const key in obj) {
  console.log(key + "->" + obj[key]); // 'foo->hello', 'bar->world'
}
```

`for of` loop yields the value itself

```javascript
const arr = ["hello", "world"];
arr.baz = "and mars";

for (const arrValue of arr) {
  console.log(arrValue); // 'hello', 'world'
}
```

It allows also to loop over more types :

```javascript
const str = "sm00th";

for (const chr of str) {
  console.log(chr); // 's', 'm', '0', '0', 't', 'h'
}
```

And also NodeList, Maps, Sets, Generators.

Object literals muse implements `Symbol.iterator` to allows `for of` usage.
