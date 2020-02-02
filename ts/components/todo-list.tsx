import { h, render } from '../helpers.js';

export class TodoList extends HTMLElement implements ITodoList {
    renderTarget: HTMLDivElement;
    storageKey: string;

    connectedCallback() {
        // Render Children
        render((
            <fragment>
                <div>
                    <a className="text-info" $click={ this.clearItems.bind(this) }>
                        Clear All Items
                    </a>
                    <a className="text-info" $click={ this.removeStorage.bind(this) }>
                        Delete this list
                    </a>
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

    removeStorage() {
        if(confirm("Are you sure you want to delete this list?")) {
           localStorage.removeItem(this.storageKey);
           location.href = '/';
        }
    }

    /* clear all */
    clearItems() {
        if(confirm("Are you sure you want to clear all items?")) {
            while(this.renderTarget.firstChild) {
                this.renderTarget.removeChild(this.renderTarget.firstChild);
            }

            this.setStorage();
        }
    }

    static define() {
        const style = <style></style>;
        style.innerText = (`
            todo-list a {
                display: inline-block;
                margin-right: 10px;
            }
        `);
        document.body.appendChild(style);
        customElements.define("todo-list", this);
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