import { h, render } from '../helpers.js';
export class TodoItem extends HTMLElement {
    connectedCallback() {
        render((h("div", { class: "alert alert-primary fade show", role: "alert" },
            this.dataset.todo,
            h("button", { type: "button", class: "close", "data-dismiss": "alert", "aria-label": "Close" },
                h("span", { "aria-hidden": "true" }, "\u00D7")))), this);
    }
}
