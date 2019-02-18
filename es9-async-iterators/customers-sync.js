'use strict';

require('log-node-version')();

const createStore = require('./fake-store-sync');

const store = createStore();

const customers = {
    [Symbol.iterator]: function() {
        let i = 0;
        return {
            next: function() {
                i++;
                const customer = store.get('customer', i);

                if (!customer) {
                    return { done: true};
                }

                customer.foods = store.get('food', i);
                return {
                    value: customer,
                    done: false
                };
            }
        };
    }
};

for (const customer of customers) {
    console.log(customer);
}