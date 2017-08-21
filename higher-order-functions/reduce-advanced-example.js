#!/usr/bin/env node
'use strict';

const fs = require('fs');

/*
 * input : a text file tab + lf separated$
 * ouput : a literal object where name is the key containing an array of objects containing name, price and quantity props) :
 * {
 *     'mark johansson': [
 *         {name: 'waffle iron', price: '80', quantity: '2'},
 *         etc ...
 *     ]
 * }
 */

const output = fs.readFileSync('reduce-advanced-example.data', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        });
        return customers;
    }, {});

console.log('output', JSON.stringify(output, null, 2));
