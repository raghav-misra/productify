import { h, render } from "../helpers.js";

export class ListPreview extends HTMLElement {
    connectedCallback() {
        render((
            <div className="card-inline card card-body back-dark">
                <p className="lead text-center">
                    { this.dataset.todoList }
                    <span className="badge badge-pill badge-success back-pink" title={this.dataset.items + " items in the list"} style="margin-left: 5px;">{this.dataset.items}</span>
                </p>
                <a 
                    className="full-width btn btn-outline-success" 
                    href={"/todo.html?" + this.dataset.todoList}>
                    Enter List View
                </a>
            </div>
        ), this);
    }
}