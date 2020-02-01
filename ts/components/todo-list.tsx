import { h, render } from '../helpers.js';

export class TodoList extends HTMLElement {
    renderTarget: HTMLDivElement;

    connectedCallback() {
        // Render Children
        render((
            <fragment>
                <div>
                    <a className="text-info">Clear</a>
                </div>
                <div data-item-target></div>
            </fragment>
        ), this);

        this.renderTarget = this.querySelector("[data-item-target]");

        this.getStorage();
    }

    /* Add & Remove 'Listeners' */
    addItem(itemString: string) {
        render(
            <todo-item data-todo={ itemString }/>,
            this.renderTarget
        );
        // Update local storage:
        this.setStorage();
    }

    removeItem(existingItem: HTMLElement) {
        // Remove the item:
        this.renderTarget.removeChild(existingItem);

        // Update local storage:
        this.setStorage();
    }

    /* Serialise localStorage JSON */
    setStorage() {
        const todoArray = [];
        this.renderTarget.querySelectorAll("todo-item").forEach((item: HTMLElement) => {
            if (item.hasAttribute("data-todo")) todoArray.push(item.getAttribute("data-todo"));
        });

        window.localStorage.setItem("$DATA$", JSON.stringify(todoArray));
    }

    getStorage() {
        const items = JSON.parse(window.localStorage.getItem("$DATA$") || "[]");

        items.forEach((
            (name) => this.addItem(name)
        ).bind(this));
    }
}