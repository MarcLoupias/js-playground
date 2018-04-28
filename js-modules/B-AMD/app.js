'use strict';

require.config({
    paths: {
        lodash: 'node_modules/lodash-amd/main',
        myModule: 'scripts/my-module'
    }
});

/*
 * This is the application entry point.
 */

requirejs(['myModule'], function(myModule) {

    // we cannot use DOMContentLoaded here because this module is downloaded and ran AFTER
    // the DOMContentLoaded have been emitted by the browser.

    /*document.addEventListener('DOMContentLoaded', function() {
     document.getElementById('txt-resultat-id').innerText = '0';
     document.getElementById('input-nombre-id').value = '1';
     });*/

    // we need to replace it by an init function.

    function calculer() {
        const oldTotal = parseInt(document.getElementById('txt-resultat-id').innerText);
        const valueToAdd = parseInt(document.getElementById('input-nombre-id').value);

        document.getElementById('txt-resultat-id').innerText = myModule.add(oldTotal, valueToAdd);
    }

    function afficherHistorique() {
        const logList = document.getElementById('log-list-id');
        const newLogItem = document.createElement('li');
        newLogItem.appendChild(document.createTextNode(myModule.getLastLogString()));
        logList.appendChild(newLogItem);
    }

    function initWebapp() {
        document.getElementById('txt-resultat-id').innerText = '0';
        document.getElementById('input-nombre-id').value = '1';

        document.getElementById('btn-additionner-id').addEventListener('click', function () {
            calculer();
            afficherHistorique();
        });
    }

    initWebapp();
});