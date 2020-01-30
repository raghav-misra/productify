import { h, render } from '../helpers.js';
export class TodoItem extends HTMLElement {
    connectedCallback() {
        // Render Children
        render((h("fragment", null,
            h("br", null),
            h("br", null),
            h("div", { class: "alert alert-primary fade show", role: "alert" },
                this.dataset.todo,
                h("button", { "$click": this.close.bind(this), type: "button", class: "close", "data-dismiss": "alert", "aria-label": "Close" },
                    h("span", { "aria-hidden": "true" }, "\u00D7"))))), this);
    }
    close() {
        this.parentNode.removeChild(this);
    }
}
