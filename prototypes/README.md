# `prototype`

[Prototype basics - Object Creation in JavaScript P3 - FunFunFunction](https://www.youtube.com/watch?v=YkoelSTUy7A&index=3&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub)

Prototype are **delegates**, they do not create a copy of the original object, they delegate access.

They don't work as classes.

If a property does not exist on an object, javascript looks automatically for it's prototype.

[__proto__ vs prototype - Object Creation in JavaScript P5 - FunFunFunction](https://www.youtube.com/watch?v=DqGwxR_0d1M&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub&index=5)

The property referencing the prototype object for a literal object is named `__proto__`.

On function object, a `prototype` property is created.

[Object.create - Object Creation in JavaScript P6 - FunFunFunction](https://www.youtube.com/watch?v=CDFN1VatiJA&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub&index=6)

`Object.create(obj)` creates a new object with prototype set to a certain object.
 
Douglas Crockford is the author of that method, he has enough influence over the js community to get it builtin 
javascript directly.

`Object.setPrototypeOf` should not be used to set the prototype of an object, we shoud use `Object.create(obj)` always.
 