import CalculatorUI from '../../Utils/Math/CalculatorUI';

(function () {
    'use strict';

    const $hostEl = $('#hostCalculator');

    if ($hostEl.length === 0) {

        alert('Falha ao encontrar elemento host');
        return;
    }

    const calcUI = new CalculatorUI();
    const calcEl = calcUI.render();

    $hostEl.empty().append(calcEl);   
})();