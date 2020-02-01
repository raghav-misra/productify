import { h, render } from '../helpers.js';
import { TodoList } from './todo-list.js';

const parentList: TodoList = document.querySelector("todo-list");

export class TodoItem extends HTMLElement {
    connectedCallback() {
        // Render Children
        render((
            <fragment>
                <br />
                <div className="alert alert-primary fade show" role="alert">
                    { this.dataset.todo }
                    <button $click={this.close.bind(this)} type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </fragment>
        ), this);
    }

    close() {
        parentList.removeItem(this);
    }
}