#!/usr/bin/env node
'use strict';

const assert = require('assert');

function getAnimals(fetch, id) {
    return fetch('http://api.animalfarmgame.com/animals/' + id)
        .then(response => response.json())
        .then(data => data.results[0]);
}

describe('getAnimals', () => {
    it('calls fetch with the correct url', () => {
        const fakeFetch = url => {
            assert(url === 'http://api.animalfarmgame.com/animals/123');
            return new Promise(function(resolve) {

            });
        };

        getAnimals(fakeFetch, 123);
    });

    it('parses the response of fetch correctly', (done) => {
        const fakeFetch = () => {
            return Promise.resolve({
                json: () => Promise.resolve({
                    results: [
                        { name: 'fluffykins' }
                    ]
                })
            })
        };

        getAnimals(fakeFetch, 12345)
            .then(result => {
                assert(result.name === 'fluffykins');
                done();
            });
    });
});
