# ES6 : Arrow Functions

Basically, it is just un shorter function syntax but it removes a lot of boilerplate keeping just the logic.

`this` behaves differently.

[Expression Bodies](http://es6-features.org/#ExpressionBodies)

**es5 example**

```javascript
odds  = evens.map(function (v) { return v + 1; });
pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; }); 
nums  = evens.map(function (v, i) { return v + i; });
```

**es6 example**

```javascript
odds  = evens.map(v => v + 1);
pairs = evens.map(v => ({ even: v, odd: v + 1 })); 
nums  = evens.map((v, i) => v + i);
```

[Statement Bodies](http://es6-features.org/#StatementBodies)

**es5 example**

```javascript
nums.forEach(function (v) { 
    if (v % 5 === 0) 
        fives.push(v); 
});
```

**es6 example**

```javascript
nums.forEach(v => { 
    if (v % 5 === 0) 
        fives.push(v); 
})
```

[Lexical this](http://es6-features.org/#Lexicalthis)

**es5 example**

```javascript
//  variant 1
var self = this;
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        self.fives.push(v);
});

//  variant 2
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        this.fives.push(v);
}, this);

//  variant 3 (since ECMAScript 5.1 only)
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        this.fives.push(v);
}.bind(this));
```

**es6 example**

```javascript
this.nums.forEach((v) => { 
    if (v % 5 === 0) 
        this.fives.push(v); 
});
```
