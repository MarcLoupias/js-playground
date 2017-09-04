# dependency injection (in javascript)

[Dependency Injection basics- Fun Fun Function](https://www.youtube.com/watch?v=0X1Ns2NRfks)

[Dependency Injection without classes - Fun Fun Function](https://www.youtube.com/watch?v=sD94szvFqGw)

**what**

The dependencies of a function are passed as argument to the function. 

**why**

To make the code testable by faking (mocking, stubbing, spying) his dependencies.

**how**

See code.

Run with 

```
<user>@<computer>:<project-dir>/dependency-injections$ npm install
<user>@<computer>:<project-dir>/dependency-injections$ npm test dependency-injection-example.js
```

**caveats**

It needs a lot of restructuring in existing app to make it testable. It hurts a lot of people.

@mpj advise to not use external framework but to make it just by passing deps in args.
