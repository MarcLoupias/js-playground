'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Fuse = require("fuse.js");
const documents = [
    {
        name: 'Lunr',
        text: 'Like Solr, but much smaller, and not as bright.'
    }, {
        name: 'React',
        text: 'A JavaScript library for building user interfaces.'
    }, {
        name: 'Lodash',
        text: 'A modern JavaScript utility library delivering modularity, performance & extras.'
    }
];
const options = {
    id: 'name',
    caseSensitive: true,
    shouldSort: true,
    tokenize: true,
    matchAllTokens: true,
    findAllMatches: true,
    includeScore: true,
    threshold: 0,
    location: 0,
    distance: 0,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: [
        'text'
    ]
};
const fuse = new Fuse(documents, options);
const results = fuse.search('JavaScript librar');
console.log(results);
//# sourceMappingURL=index.js.map