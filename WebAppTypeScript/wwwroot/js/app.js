(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Core/Layout"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Layout_1 = require("./Core/Layout");
    (function () {
        'use strict';
        var layout = new Layout_1.default();
        $(document).ready(function () {
            layout.bindEvents();
            $('[href="#v-pills-home-calculator"]').click();
        });
    })();
});
