'use strict';

const expect = require('chai').expect;
const assert = require('assert');
const testUtils = require('../test-utils');

function executeCliSync(args) {
    assert.ok(Array.isArray(args));

    return testUtils.executeSync(
        './index.js',
        args,
        { encoding: 'utf-8' }
    );
}

describe('Sync testing CLI with :', function () {
    context('-v', function() {
        let result;

        beforeEach(function() {
            result = executeCliSync(['-v']);
        });

        it('should return the package version number', () => {
            expect(result.stdout).to.equal('1.0.0\n');
        });
    });

    context('--version', function() {
        let result;

        beforeEach(function() {
            result = executeCliSync(['--version']);
        });

        it('should return the package version number', () => {
            expect(result.stdout).to.equal('1.0.0\n');
        });
    });

    context('-p -c toto', function() {
        let result;

        beforeEach(function() {
            result = executeCliSync(['-p', '-c', 'toto']);
        });

        it('should return a pizza with peppers and toto cheese', () => {
            expect(result.stdout).to.equal('you ordered a pizza with:\n  - peppers\n  - toto cheese\n');
        });
    });
});

