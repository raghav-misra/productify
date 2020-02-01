import { h, render } from '../helpers.js';
export class PopupBox extends HTMLElement {
    connectedCallback() {
        // Render Children
        render((h("fragment", null,
            h("div", null,
                h("a", { className: "text-info" }, "Clear")),
            h("div", { "data-item-target": true }))), this);
        this.renderTarget = this.querySelector("[data-item-target]");
    }
}
