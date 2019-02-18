'use strict';

require('log-node-version')();

const createStore = require('./fake-store-async');

const store = createStore();

const customers = {
    [Symbol.asyncIterator]: function() {
        let i = 0;
        return {
            next: async function() {
                i++;
                const customer = await store.get('customer', i);

                if (!customer) {
                    return { done: true};
                }

                customer.foods = await store.get('food', i);
                return {
                    value: customer,
                    done: false
                };
            }
        };
    }
};

(async function() {
    for await (const customer of customers) {
        console.log(customer);
    }

    const iterator = customers[Symbol.asyncIterator]();
    console.log(await iterator.next());
    console.log(await iterator.next());
    console.log(await iterator.next());
})();
