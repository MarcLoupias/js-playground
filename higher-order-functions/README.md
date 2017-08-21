# higher order functions

[Higher-order functions - Part 1 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=BMUiFMZr7vk&index=1&list=PL0zVEGEvSaeGPBRt-y2QZ3wh64XAe40jx)

In javascript, **functions are values** like strings or numbers.

They can be assigned to variables or passed to others functions as argument.

Theses functions are named **higher order functions**.

For what purpose ?

Composition.

## filter

One of the most basic example is the use of a `filter` higher order function.

`filter` will takes as parameter a function defining the filter criteria.

His role is to output an smaller new array from the original array.

Items are unchanged.

## map

[Higher-order functions - Map - Part 2 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2)

`map` is another higher order function to work on arrays.

His role is to output an new array from the original array.
 
The new array have the same length of the original array, but each item is transformed.

The function passed in argument implements the transformation logic.

## reduce

[Higher-order functions - Reduce basics - Part 3 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3)

`reduce` is another higher order function to work on arrays.

`reduce` is not specialized like `filter` or `map`.

`reduce` is used when no other higher order function fit the needs.

`reduce` could be used to implements `filter` or `map` or anything else.
