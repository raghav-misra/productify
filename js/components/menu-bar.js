var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { h, render } from '../helpers.js';
var MenuBar = /** @class */ (function (_super) {
    __extends(MenuBar, _super);
    function MenuBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuBar.prototype.connectedCallback = function () {
        render((h("fragment", null,
            h("code", null,
                h("a", { href: "/" },
                    "Home",
                    h("i", { "data-feather": "home" }))),
            h("br", null),
            h("code", null,
                h("a", { href: "/#lists" },
                    "Lists",
                    h("i", { "data-feather": "list" }))),
            h("br", null),
            h("code", null,
                h("a", { href: "/#notes" },
                    "Notes",
                    h("i", { "data-feather": "edit" }))),
            h("br", null),
            h("code", null,
                h("a", { target: "blank", href: "https://github.com/raghav-misra/productify" },
                    "Source",
                    h("i", { "data-feather": "github" }))))), this);
    };
    MenuBar.loadStyles = function () {
        var style = h("style", null);
        style.innerText = ("\n            menu-bar {\n                position: absolute;\n                top: 5px; left: 0;\n                width: auto;\n                display: inline-block;\n                padding: 5px;\n            } \n\n            menu-bar svg {\n                left: 60px; bottom: 23px; \n                position: relative;\n            }\n\n            menu-bar code {\n                position: absolute; \n                left: 10px; \n                display: block; \n                padding: 2.5px; \n                font-size: 1em;\n            }\n        ").replace("\n", "");
        document.body.appendChild(style);
    };
    MenuBar.define = function () {
        // Load CSS:
        this.loadStyles();
        // Load Feather Icons:
        render(h("script", { onload: "feather.replace({ width: 12, height: 12 })", src: "https://unpkg.com/feather-icons" }), document.body);
        // Define Element:
        customElements.define("menu-bar", this);
    };
    return MenuBar;
}(HTMLElement));
export { MenuBar };
