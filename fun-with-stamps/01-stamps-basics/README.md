# Fun with Stamps. Episode 1. Stamp basics

[Fun with Stamps. Episode 1. Stamp basics](https://medium.com/@koresar/fun-with-stamps-episode-1-stamp-basics-e0627d81efe0)

Hello. I’m developer Vasyl Boroviak and welcome to the first episode of *Vasyl
Boroviak presents ***Fun*** with Stamps*.

## What are Stamps?

Stamps are an evolution in software development. After a decade of doing classic
OOP and a couple of attempts to dive into functional programming (FP) I fell in
love with stamps.

Many people feel that
[classic](https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a)
[OOP](https://www.leaseweb.com/labs/2015/08/object-oriented-programming-is-exceptionally-bad/)
[is](https://blog.pivotal.io/labs/labs/all-evidence-points-to-oop-being-bullshit)
[just](https://www.youtube.com/watch?v=QM1iUe6IofM)
[bad](https://www.youtube.com/watch?v=IRTfhkiAqPw). Some feel that FP is also
[not an answer](http://degoes.net/articles/fp-is-not-the-answer).

Stamps are a new programming paradigm intended to be a better alternative to
classic OOP and an addition to FP. Stamps are not limited to JavaScript,
although only the JavaScript implementation exist to date.

Many have been amazed after embracing the concept. Here is what they
[say](https://gitter.im/stampit-org/stampit?at=56a8c889c54bc2bf180c537a):

> thanks for a library that makes javascript really fun :)<br> i’ve been using
> stamps for an internal project and it has made it easier to write reusable,
expressive code<br> and it’s fun to use

[Or](https://gitter.im/stampit-org/stampit?at=58880b9cc19662f153872d47):

> every time i talk about stamps i get all excited and my colleagues have to
> settle me down

And one more quote from
[here](http://www.barbarianmeetscoding.com/blog/2016/01/18/javascript-ultra-flexible-object-oriented-programming-with-stamps/):

> **Stamps are like mixins on steroids**. They offer a great declarative API to
> create and compose your factories of objects (stamps) with baked in support for
composing prototypes, mixing in features, deep copying composition and private
variables.

All that is powered by [these 80 lines of
code](https://github.com/stampit-org/stamp-specification/blob/ee39d3b0682dd7cf5c1ca099f8841b0f9a45cd7e/compose.js).

#### So, what is it?

* Stamps are **composable** (mixable?, combinable?) **factory functions**
* Stamps are used as a replacement for classes
* Stamps are an addition to functional programming
* Stamps are a different software development paradigm

### First example

Stamps are created using the special
[compose](https://www.npmjs.com/package/stamp-specification) function or
[various](https://github.com/stampit-org/stampit)
[utilities](https://www.npmjs.com/package/@stamp/it).

     EmptyStamp = compose(); // creating an empty stamp
     obj = EmptyStamp(); // it can create empty objects!
    console.log(obj); 

Let’s make our stamp produce objects with the property `foo`**.**

     HasFoo = compose({
      properties: {
        foo: 
      }
    });
     obj = HasFoo();
    console.log(obj); 

Now, let’s create a stamp which will produce objects with the method
`printFoo`**.**

     PrintFoo = compose({
      methods: {
        printFoo() {
          console.log(
    .foo || 
    );
        }
      }
    });
     obj = PrintFoo();
    obj.printFoo(); 

Boring, eh? But let’s `compose` those two:

     Foo = compose(HasFoo, PrintFoo);
     obj = Foo();
    obj.printFoo(); 

Alternatively you can compose them like this:

     Foo = HasFoo.compose(PrintFoo);
     Foo = PrintFoo.compose(HasFoo);
     Foo = compose().compose(HasFoo).compose(PrintFoo);
     Foo = compose(HasFoo).compose(PrintFoo);

#### Factory arguments

We all want to *pass arguments to our factories*. Also, how do I insert my logic
when an object is being created (aka constructor in classic OOP)? Here is how
you do it:

     InitFoo = compose({
      initializers: [
     (foo) {
        
     (foo) 
    .foo = foo;
      }]
    });
     obj = InitFoo(
    );
    console.log(obj); 

A bit long. But a shorter syntax is possible by using [latest
stampit](https://www.npmjs.com/package/@stamp/it) or [stampit
v3](https://www.npmjs.com/package/stampit).

     {init} 
     
    ;

     InitFoo = init(
    (foo) {
      
     (foo) 
    .foo = foo;
    });

Of course you can compose that stamp too:

     Foo = compose(HasFoo, PrintFoo, InitFoo);
     obj = Foo(
    );
    obj.printFoo(); 

Stamps can have as many initializers as you want. Each initializer would receive
the **same set of arguments**.

#### [Statics — properties on
stamp](https://medium.com/@koresar/fun-with-stamps-episode-6-statics-properties-on-stamps-e2b85825152c)

You can declare the so called [“static”
properties](https://medium.com/@koresar/fun-with-stamps-episode-6-statics-properties-on-stamps-e2b85825152c).
Those are attached to the stamp itself. The stamp below declares a single static
property `trace`, which is a function:

     TraceStampMetaData = compose({
      staticProperties: {
        trace() {
          console.log(
    );
        }
      }
    });

And, of course, you can compose that stamp with other stamps. All derived stamps
will have that property too:

     Foo2 = Foo.compose(TraceStampMetaData);
    Foo2.trace(); 

### Breaking down a stamp into pieces

Each stamp has the `.compose()` method. It also serves as the meta-data holder.
Let’s print the `Foo` stamp from above.

     Foo = compose(HasFoo, PrintFoo, InitFoo);
    console.log(Foo);

Will print this:


`Foo` is the function which has the property `.compose` which is also a function
and has properties `.methods`, `.properties`, and `.initializers`.

You, the developers, are allowed and even encouraged to manipulate that
meta-data! The data is called the “stamp descriptor” or just “descriptor”.

### Objects created by stamps

Let’s take a look at the objects created by this stamp:

     obj = Foo();
    console.log(obj); 

It is very similar to the *“properties:“* line printed above. Right?

Let’s look at the prototype of the object:

    console.log(Object.getPrototypeOf(obj));

Woah! That’s very similar to the *“methods:”*. Indeed, it is the *“.methods”*
object itself:

    console.log(Object.getPrototypeOf(obj) === Foo.compose.methods);

### Similarities with Promises (aka Thenables)

* *Thenable* ~ *Composable*
* **.then()** ~ **.compose()**
* *Promise* ~ *Stamp*
* **new Promise(function(resolve, reject))** ~ **compose(…composables)**

### When to use stamps?

* [When you need dependency injection in both OOP and
FP](https://medium.com/p/37be8e9a5714) (the Episode number 2)
* [When you need multiple similar behavior
objects](http://www.barbarianmeetscoding.com/blog/2016/01/18/javascript-ultra-flexible-object-oriented-programming-with-stamps/)
(article by [Jaime González
García](https://plus.google.com/+JaimeGonzÃ¡lezGarcÃ­a))
* [Instead of classes](https://medium.com/p/e387ef041896) (the Episode 3)
* And many other applications, like UI components, etc.

### Conclusion

You have just read everything you need to know to start using stamps. Although,
this is only the tip of the iceberg.