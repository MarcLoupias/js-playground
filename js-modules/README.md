# JavaScript Modules

The core idea is : A file is a module.

see : https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

## why

- linking dependencies together (in JavaScript world it is just files and it does this with global var by default)
- encapsulation to prevent conflicts
- managing cycling ref (A deps on B who deps on A)
- import order matters and it is hard to maintain

## A - revealing module pattern

Example with a browser SPA.

## B - AMD

Example with the revealing module pattern example enhanced with AMD style modules

## C - CommonJS

### server side

Example with a simple Node.js API

### browser side

First example enhanced with browserify

## D - ES6 Modules

### server side

Example with a simple Node.js API

### browser side

First example enhanced with browserify


TODO : https://medium.com/@crohacz_86666/basics-of-modular-javascript-2395c82dd93a