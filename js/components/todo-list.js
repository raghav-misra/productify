import { h, render } from '../helpers.js';
export class TodoList extends HTMLElement {
    connectedCallback() {
        // Render Children
        render((h("fragment", null,
            h("div", null,
                h("a", { className: "text-info" }, "Clear")),
            h("div", { "data-item-target": true }))), this);
        this.renderTarget = this.querySelector("[data-item-target]");
        this.getStorage();
    }
    /* Add & Remove 'Listeners' */
    addItem(itemString) {
        render(h("todo-item", { "data-todo": itemString }), this.renderTarget);
        // Update local storage:
        this.setStorage();
    }
    removeItem(existingItem) {
        // Remove the item:
        this.renderTarget.removeChild(existingItem);
        // Update local storage:
        this.setStorage();
    }
    /* Serialise localStorage JSON */
    setStorage() {
        const todoArray = [];
        this.renderTarget.querySelectorAll("todo-item").forEach((item) => {
            if (item.hasAttribute("data-todo"))
                todoArray.push(item.getAttribute("data-todo"));
        });
        window.localStorage.setItem("$DATA$", JSON.stringify(todoArray));
    }
    getStorage() {
        const items = JSON.parse(window.localStorage.getItem("$DATA$") || "[]");
        items.forEach(((name) => this.addItem(name)).bind(this));
    }
}
