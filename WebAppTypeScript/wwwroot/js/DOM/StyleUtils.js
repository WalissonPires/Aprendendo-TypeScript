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
    var StyleUtils = /** @class */ (function () {
        function StyleUtils() {
        }
        StyleUtils.objectToString = function (style) {
            var strStyle = '';
            for (var key in style) {
                if (strStyle === '')
                    strStyle += key + ':' + style[key];
                else
                    strStyle += ';' + key + ':' + style[key];
            }
            return strStyle;
        };
        return StyleUtils;
    }());
    exports.default = StyleUtils;
});
