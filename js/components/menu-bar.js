import { h, render } from '../helpers.js';
export class MenuBar extends HTMLElement {
    connectedCallback() {
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
    }
    static loadStyles() {
        const style = h("style", null);
        style.innerText = (`
            menu-bar {
                position: fixed;
                top: 5px; left: 0;
                width: auto;
                display: inline-block;
                padding: 5px;
            }

            menu-bar svg {
                margin: 5px;
            }

            menu-bar a {
                position: fixed;
                left: 10px;
                text-align: right !important; 
                display: inline-block; 
                padding: 2.5px; 
                font-size: 1.25em;
            }
        `).replace("\n", "");
        document.body.appendChild(style);
    }
    static define() {
        // Load CSS:
        this.loadStyles();
        // Load Feather Icons:
        render(h("script", { onload: "feather.replace({ width: 12, height: 12 })", src: "https://unpkg.com/feather-icons" }), document.body);
        // Define Element:
        customElements.define("menu-bar", this);
    }
}
