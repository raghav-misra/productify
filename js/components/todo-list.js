import { h, render } from '../helpers.js';
export class TodoList extends HTMLElement {
    connectedCallback() {
        // Render Children
        render((h("fragment", null,
            h("a", { class: "text-info" }, "Clear"))), this);
    }
}
