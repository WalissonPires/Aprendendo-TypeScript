(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Calculator", "../DOM/StyleUtils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Calculator_1 = require("./Calculator");
    var StyleUtils_1 = require("../DOM/StyleUtils");
    var CalculatorUI = /** @class */ (function () {
        function CalculatorUI() {
            this._calc = new Calculator_1.default();
        }
        CalculatorUI.prototype.handleBtnClick = function (e) {
            var userInput = $(e.target).text();
            switch (userInput) {
                case '=':
                    return;
                case 'c':
                    this._calc.input = '';
                    $(this._expElement).html('');
                    $(this._resultElement).html('');
                    return;
            }
            var especialChars = ['=', 'c'];
            if (especialChars.indexOf(userInput) > -1) {
                return;
            }
            var currentInput = this._calc.input;
            var lastChar = currentInput[currentInput.length - 1];
            var operators = ['+', '-', '*', '/'];
            var newInput = null;
            if (operators.indexOf(lastChar) > -1 && operators.indexOf(userInput) > -1)
                newInput = currentInput.substring(0, currentInput.length - 2) + userInput;
            else
                newInput = this._calc.input + userInput;
            $(this._expElement).html(newInput);
            try {
                this._calc.input = newInput;
                $(this._resultElement).html(String(this._calc.result));
            }
            catch (e) {
                if (operators.indexOf(userInput) === -1)
                    $(this._resultElement).html('ERROR: ' + e.message);
            }
        };
        CalculatorUI.prototype.getContext = function () {
            throw new Error("Method not implemented.");
        };
        CalculatorUI.prototype.render = function () {
            var _this = this;
            var dom = (React.createElement("div", { class: "calculator-ui" },
                React.createElement(TituloComponent, { size: 18 },
                    React.createElement("span", null, "Calculadora")),
                React.createElement("div", { class: "output" },
                    React.createElement("p", { class: "linha l1" }),
                    React.createElement("p", { class: "linha l2" }, "0")),
                React.createElement("div", { class: "keyboard" },
                    React.createElement("button", { class: "kb-btn" }, "7"),
                    React.createElement("button", { class: "kb-btn" }, "8"),
                    React.createElement("button", { class: "kb-btn" }, "9"),
                    React.createElement("button", { class: "kb-btn" }, "+"),
                    React.createElement("button", { class: "kb-btn" }, "4"),
                    React.createElement("button", { class: "kb-btn" }, "5"),
                    React.createElement("button", { class: "kb-btn" }, "6"),
                    React.createElement("button", { class: "kb-btn" }, "-"),
                    React.createElement("button", { class: "kb-btn" }, "1"),
                    React.createElement("button", { class: "kb-btn" }, "2"),
                    React.createElement("button", { class: "kb-btn" }, "3"),
                    React.createElement("button", { class: "kb-btn" }, "*"),
                    React.createElement("button", { class: "kb-btn btn__w50" }, "c"),
                    React.createElement("button", { class: "kb-btn btn__w50" }, "="),
                    React.createElement("button", { class: "kb-btn" }, "/"))));
            $(dom).find('.kb-btn').each(function (i, x) { return x.addEventListener('click', _this.handleBtnClick.bind(_this)); });
            this._expElement = $(dom).find('.output .l1')[0];
            this._resultElement = $(dom).find('.output .l2')[0];
            return dom;
        };
        return CalculatorUI;
    }());
    exports.default = CalculatorUI;
    var TituloComponent = /** @class */ (function () {
        function TituloComponent(props) {
            this.props = props;
        }
        TituloComponent.prototype.render = function () {
            var style = {};
            style['font-size'] = (this.props.size || 12).toString();
            style.margin = '0';
            style.padding = '0';
            var strStyle = StyleUtils_1.default.objectToString(style);
            return (React.createElement("h1", { style: strStyle }, this.props.children));
        };
        return TituloComponent;
    }());
});
//const h = (Comp: any): any => console.log(`creating ${Comp} element`);
//<div />;
//class FooComponent {
//    render = () => null;
//}
//<FooComponent />;
