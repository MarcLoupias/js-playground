'use strict';

/*
 * This is the application entry point.
 *
 * It is a Immediately Invoked Function Expression. (IIFE)
 *
 * We declare explicitly witch globals we want to use.
 * By doing this we got a clear list of dependencies, we can deal easily with long namespaces.
 * We can also aliases the dependencies used in the app.
 */

(function(document, parseInt, calculateur) {

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('txt-resultat-id').innerText = '0';
        document.getElementById('input-nombre-id').value = '1';
    });

    document.getElementById('btn-additionner-id').addEventListener('click', function () {
        calculer();
        afficherHistorique();
    });

    function calculer() {
        const oldTotal = parseInt(document.getElementById('txt-resultat-id').innerText);
        const valueToAdd = parseInt(document.getElementById('input-nombre-id').value);

        document.getElementById('txt-resultat-id').innerText = calculateur.add(oldTotal, valueToAdd);
    }

    function afficherHistorique() {
        const logList = document.getElementById('log-list-id');
        const newLogItem = document.createElement('li');
        newLogItem.appendChild(document.createTextNode(calculateur.getLastLogString()));
        logList.appendChild(newLogItem);
    }

})(window.document, Number.parseInt, myModule);
