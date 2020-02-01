import { h, render } from '../helpers.js';

export class TodoList extends HTMLElement implements ITodoList {
    renderTarget: HTMLDivElement;
    storageKey: string;

    connectedCallback() {
        // Render Children
        render((
            <fragment>
                <div>
                    <a className="text-info" $click={ this.clearItems.bind(this) }>Clear</a>
                </div>
                <div data-item-target></div>
            </fragment>
        ), this);

        this.renderTarget = this.querySelector("[data-item-target]");
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
            if (item.dataset.todo) todoArray.push(item.dataset.todo);
        });

        window.localStorage.setItem(this.storageKey, JSON.stringify(todoArray));
    }

    getStorage() {
        const items = JSON.parse(window.localStorage.getItem(this.storageKey) || "[]");

        items.forEach((
            (name) => this.addItem(name)
        ).bind(this));
    }

    clearItems() {
        if(confirm("Are you sure you want to clear all items?")) {
            while(this.renderTarget.firstChild) {
                this.renderTarget.removeChild(this.renderTarget.firstChild);
            }

            this.setStorage();
        }
    }
}

export interface ITodoList {
    renderTarget: HTMLDivElement;

    connectedCallback(): void;

    addItem(itemString: string): void;
    removeItem(existingItem: HTMLElement): void;

    setStorage(): void;
    getStorage(): void;
}