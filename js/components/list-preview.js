import { h, render } from "../helpers.js";
export class ListPreview extends HTMLElement {
    connectedCallback() {
        render((h("div", { class: "card-inline card card-body" },
            h("p", { class: "lead text-center" },
                this.dataset.todoList,
                h("span", { class: "badge badge-pill badge-success back-pink", title: this.dataset.items + " items in the list", style: "margin-left: 5px;" }, this.dataset.items)),
            h("a", { class: "full-width btn btn-outline-success", href: "/todo.html?" + this.dataset.todoList }, "Enter List View"))), this);
    }
}
