import { h, render } from '../helpers.js';
const parentList = document.querySelector("todo-list");
export class TodoItem extends HTMLElement {
    connectedCallback() {
        // Render Children
        render((h("fragment", null,
            h("br", null),
            h("div", { className: "alert alert-primary fade show", role: "alert" },
                this.dataset.todo,
                h("button", { "$click": this.close.bind(this), type: "button", className: "close", "data-dismiss": "alert", "aria-label": "Close" },
                    h("span", { "aria-hidden": "true" }, "\u00D7"))))), this);
    }
    close() {
        parentList.removeItem(this);
    }
}
