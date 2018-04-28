'use strict';

define('myModule', ['lodash'], function(_){

    const logList = [];

    function add(a, b) {
        const total = _.add(a, b);

        logList.push({ a, b, total });

        return total;
    }

    function getLastLogString() {
        const lastLog = logList.slice(-1)[0];

        return `${ lastLog.a } + ${ lastLog.b } = ${ lastLog.total }`;
    }

    return {
        add: add,
        getLastLogString: getLastLogString
    };
});