declare namespace JSX {

    interface Element { }

    interface ElementClass {
        render(): any;
    }

    interface ElementAttributesProperty {
        props: any;
    }

    interface ElementChildrenAttribute {
        children: {};  // specify children name to use
    }

    interface IntrinsicElements {
        div: any;
        p: any;
        span: any;
        a: any;
        button: any;
        h1: any;
        h2: any;
        h3: any;
        h4: any;
        h5: any;
        h6: any;
        // ...
    }
}

class AppFactory {
    /**
     * React-like createElement function so we can use JSX in our TypeScript/JavaScript code.
     */
    public createElement(tag: string | Function, attrs: any, children: any): HTMLElement {        
        
        if (tag instanceof Function) {
            var args = (Object as any).assign({}, attrs);
            args.children = children;
            var component = new (<any>tag)(args);
            return component.render();
        }
        
        var element: HTMLElement = document.createElement(tag);
        for (let name in attrs) {
            if (name && attrs.hasOwnProperty(name)) {
                var value: string | null | boolean = attrs[name];
                if (value === true) {
                    element.setAttribute(name, name);
                } else if (value !== false && value != null) {
                    element.setAttribute(name, value.toString());
                }
            }
        }
        for (let i: number = 2; i < arguments.length; i++) {
            let child: any = arguments[i];
            element.appendChild(
                child.nodeType == null ?
                    document.createTextNode(child.toString()) : child);
        }

        return element;
    }
}

/**
 * Basic services available throughout YetaWF.
 */
var React: AppFactory = new AppFactory();