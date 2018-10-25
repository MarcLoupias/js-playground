'use strict';

const expect = require('chai').expect;
const assert = require('assert');
const spawnSync = require('child_process').spawnSync;

function executeCliSync(args) {
    assert.ok(Array.isArray(args));

    return spawnSync(
        './index.js',
        args,
        { encoding: 'utf-8' }
    );
}

describe('Testing CLI with :', function () {
    context('-v', function() {
        let result;

        beforeEach(function() {
            result = executeCliSync(['-v']);
        });

        it('should exit with 0 status', () => {
            expect(result.status).to.equal(0);
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

        it('should exit with 0 status', () => {
            expect(result.status).to.equal(0);
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

        it('should exit with 0 status', () => {
            expect(result.status).to.equal(0);
        });

        it('should return a pizza with peppers and toto cheese', () => {
            expect(result.stdout).to.equal('you ordered a pizza with:\n  - peppers\n  - toto cheese\n');
        });
    });
});

