import { h, render } from '../helpers.js';
const parentList = document.querySelector("todo-list");
export class TodoItem extends HTMLElement {
    connectedCallback() {
        // Render Children
        render((h("fragment", null,
            h("br", null),
            h("div", { className: "alert alert-primary fade show", role: "alert" },
                h("span", { "$input": this.changeTodo.bind(this), "data-text-target": true, contentEditable: true }, this.dataset.todo),
                h("button", { "$click": this.close.bind(this), type: "button", className: "close", "data-dismiss": "alert", "aria-label": "Close" },
                    h("span", { "aria-hidden": "true" }, "\u00D7"))))), this);
        // Todo Text Target:
        this.textTarget = this.querySelector("[data-text-target]");
    }
    close() {
        parentList.removeItem(this);
    }
    changeTodo() {
        this.dataset.todo = this.textTarget.innerText;
        parentList.setStorage();
    }
    get todo() { return this.dataset.todo; }
    set todo(newValue) {
        this.dataset.todo = newValue;
        this.textTarget.innerText = newValue;
    }
}
