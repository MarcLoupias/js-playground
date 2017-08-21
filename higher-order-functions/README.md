# higher order functions

[Higher-order functions - Part 1 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=BMUiFMZr7vk&index=1&list=PL0zVEGEvSaeGPBRt-y2QZ3wh64XAe40jx)

In javascript, **functions are values** like strings or numbers.

They can be assigned to variables or passed to others functions as argument.

Theses functions are named **higher order functions**.

For what purpose ?

Composition.

## a word about performances

[See this comment](https://www.youtube.com/watch?v=Wl98eZpkp-c&lc=z12vu1fy3wryxlvzw04cdzqahn2ssd55ys00k)

> The tl;dr is that micro benchmarks looks at performance in a very narrow way without context. 
> 
> - they are both extremely fast, so the 7x performance difference is a bit navelgazing when 10 million items can 
> be processed in half a second. 
> If you're processing 10 million items in a performance-sensitive environment, your problem is not that the processing 
> time per item, it's that you are processing 10 million items in the first place. 
> - JavaScript is not assembly - there is an enourmous amount of optimization going on on your code that you have no 
> control over and cannot predict, and each engine is different, and it's different from run to run as the interpreter 
> identifies "hot" code paths during execution. 
> I tried a variant of your code here (https://jsfiddle.net/L2j5npoz/4/), and the second reduce run is twice as fast as 
> the first run in Chrome. If I run the same code on Firefox, the reduce is almost as fast as the loop. 
> 
> Performance is just not as clear-cut as microbenchmarks make them out to be - you need to look at an application 
> holistically through a profiler and identify performance bottlenecks, not try to anticipate them theoretically.﻿

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
