(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Calculator = /** @class */ (function () {
        function Calculator(initialValue) {
            if (initialValue === void 0) { initialValue = 0; }
            this._result = initialValue;
            this._input = '';
        }
        Object.defineProperty(Calculator.prototype, "input", {
            get: function () {
                return this._input;
            },
            set: function (input) {
                this._input = input;
                this._result = eval(input);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Calculator.prototype, "result", {
            get: function () {
                return this._result;
            },
            enumerable: true,
            configurable: true
        });
        return Calculator;
    }());
    exports.default = Calculator;
});
