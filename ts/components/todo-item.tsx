import { h, render } from '../helpers.js';

export class TodoItem extends HTMLElement {
    connectedCallback() {
        render((
            <div class="alert alert-primary fade show" role="alert">
                { this.dataset.todo }
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        ), this);
    }
}