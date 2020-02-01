import { h, render } from '../helpers.js';
import { ITodoList } from './todo-list.js';

const parentList: ITodoList = document.querySelector("todo-list") as unknown as ITodoList;

export class TodoItem extends HTMLElement {
    textTarget: HTMLSpanElement;

    connectedCallback() {
        // Render Children
        render((
            <fragment>
                <br />
                <div className="alert alert-primary fade show" role="alert">
                    <span $input={ this.changeTodo.bind(this) } data-text-target contentEditable>{ this.dataset.todo }</span>
                    <button $click={ this.close.bind(this) } type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </fragment>
        ), this);

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

    get todo() { return this.dataset.todo }
    set todo(newValue) {
        this.dataset.todo = newValue;
        this.textTarget.innerText = newValue;
    }
}