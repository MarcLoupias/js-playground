'use strict';

const expect = require('chai').expect;
const spawnSync = require('child_process').spawnSync;

describe('Testing -v option', function () {
    // If your CLI tool is taking some expected time to start up / tear down, you
    // might want to set this to avoid slowness warnings.
    this.slow(600);

    it('should return the package version number', () => {
        // the js file MUST have 777 access
        const result = spawnSync(
            './commander-basic.js',
            ['-v'],
            { encoding: 'utf-8' }
        );

        expect(result.stderr).to.be.empty;
        expect(result.status).to.equal(0);
        console.log('result = ', result);
        expect(result.stdout).to.include('1.0.0');
    });

    it('should return a pizza with peppers and toto cheese', () => {
        // the js file MUST have 777 access
        const result = spawnSync(
            './commander-basic.js',
            ['-p', '-c', 'toto'],
            { encoding: 'utf-8' }
        );

        expect(result.stderr).to.be.empty;
        expect(result.status).to.equal(0);
        console.log('result = ', result);
        expect(result.stdout).to.equal('you ordered a pizza with:\n  - peppers\n  - toto cheese\n');
    });
});