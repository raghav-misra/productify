import { h, render } from '../helpers.js';

export class TodoList extends HTMLElement {
    connectedCallback() {
        // Render Children
        render((
            <fragment>
                <a class="text-info">Clear</a>
            </fragment>
        ), this);
    }
}