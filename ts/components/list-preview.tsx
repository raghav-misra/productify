import { h, render } from "../helpers.js";

export class ListPreview extends HTMLElement {
    connectedCallback() {
        render((
            <div class="card-inline card card-body">
                <p class="lead text-center">
                    { this.dataset.todoList }
                    <span class="badge badge-pill badge-success back-pink" title={this.dataset.items + " items in the list"} style="margin-left: 5px;">{this.dataset.items}</span>
                </p>
                <a 
                    class="full-width btn btn-outline-success" 
                    href={"/todo.html?" + this.dataset.todoList}>
                    Enter List View
                </a>
            </div>
        ), this);
    }
}