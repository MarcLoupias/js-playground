'use strict';

const expect = require('chai').expect;
const assert = require('assert');
const testUtils = require('../test-utils');

async function executeCliAsync(args) {
    assert.ok(Array.isArray(args));

    return await testUtils.executeAsync(
        './index.js',
        args
    );
}

describe('Async testing CLI with :', function () {
    context('-v', function() {
        let result;

        beforeEach(async () => {
            result = await executeCliAsync(['-v']);
        });

        it('should return the package version number', async function() {
            result = await executeCliAsync(['-v']);
            expect(result).to.equal('1.0.0\n');
        });
    });

    context('--version', function() {
        let result;

        beforeEach(async () => {
            result = await executeCliAsync(['--version']);
        });

        it('should return the package version number', async () => {
            expect(result).to.equal('1.0.0\n');
        });
    });

    context('-p -c toto', function() {
        let result;

        beforeEach(async () => {
            result = await executeCliAsync(['-p', '-c', 'toto']);
        });

        it('should return a pizza with peppers and toto cheese', async () => {
            expect(result).to.equal('you ordered a pizza with:\n  - peppers\n  - toto cheese\n');
        });
    });
});
