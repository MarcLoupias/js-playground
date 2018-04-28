'use strict';

/*
 * myModule use the revealing module pattern. We expose only the public interface we want to :
 * - add function
 * - getLastLogString function
 *
 * We don't want the user to deal with the log list.
 */

const myModule = (function(_) {
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

})(_);
