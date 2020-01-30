import { h, render } from '../helpers.js';

export class TodoItem extends HTMLElement {
    connectedCallback() {
        // Render Children
        render((
            <fragment>
                <br/>
                <br/>
                <div class="alert alert-primary fade show" role="alert">
                    { this.dataset.todo }
                    <button $click={this.close.bind(this)} type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </fragment>
        ), this);
    }

    close() {
        this.parentNode.removeChild(this);
    }
}