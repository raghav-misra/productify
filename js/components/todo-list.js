import { h, render } from '../helpers.js';
export class TodoList extends HTMLElement {
    connectedCallback() {
        // Render Children
        render((h("fragment", null,
            h("div", null,
                h("a", { className: "text-info", "$click": this.clearItems.bind(this) }, "Clear")),
            h("div", { "data-item-target": true }))), this);
        this.renderTarget = this.querySelector("[data-item-target]");
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
            if (item.dataset.todo)
                todoArray.push(item.dataset.todo);
        });
        window.localStorage.setItem(this.storageKey, JSON.stringify(todoArray));
    }
    getStorage() {
        const items = JSON.parse(window.localStorage.getItem(this.storageKey) || "[]");
        items.forEach(((name) => this.addItem(name)).bind(this));
    }
    clearItems() {
        if (confirm("Are you sure you want to clear all items?")) {
            while (this.renderTarget.firstChild) {
                this.renderTarget.removeChild(this.renderTarget.firstChild);
            }
            this.setStorage();
        }
    }
}
