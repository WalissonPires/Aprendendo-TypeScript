(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../Utils/Math/CalculatorUI"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CalculatorUI_1 = require("../../Utils/Math/CalculatorUI");
    (function () {
        'use strict';
        var $hostEl = $('#hostCalculator');
        if ($hostEl.length === 0) {
            alert('Falha ao encontrar elemento host');
            return;
        }
        var calcUI = new CalculatorUI_1.default();
        var calcEl = calcUI.render();
        $hostEl.empty().append(calcEl);
    })();
});
