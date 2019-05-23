var AppFactory = /** @class */ (function () {
    function AppFactory() {
    }
    /**
     * React-like createElement function so we can use JSX in our TypeScript/JavaScript code.
     */
    AppFactory.prototype.createElement = function (tag, attrs, children) {
        if (tag instanceof Function) {
            var args = Object.assign({}, attrs);
            args.children = children;
            var component = new tag(args);
            return component.render();
        }
        var element = document.createElement(tag);
        for (var name_1 in attrs) {
            if (name_1 && attrs.hasOwnProperty(name_1)) {
                var value = attrs[name_1];
                if (value === true) {
                    element.setAttribute(name_1, name_1);
                }
                else if (value !== false && value != null) {
                    element.setAttribute(name_1, value.toString());
                }
            }
        }
        for (var i = 2; i < arguments.length; i++) {
            var child = arguments[i];
            element.appendChild(child.nodeType == null ?
                document.createTextNode(child.toString()) : child);
        }
        return element;
    };
    return AppFactory;
}());
/**
 * Basic services available throughout YetaWF.
 */
var React = new AppFactory();
