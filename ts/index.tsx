import { h, render } from './helpers.js';

/* MenuBar Custom Element */
import { MenuBar } from './components/menu-bar.js';
MenuBar.define();

/* list Preview Component */
import { ListPreview } from './components/list-preview.js';
customElements.define("list-preview", ListPreview);

/* Index localstorage entries */
const listContainer = document.getElementById("listContainer");

Object.keys(localStorage).forEach((key) => {
    if(key.startsWith("@list<>")) {
        render(
            <list-preview data-todo-list={ key.replace("@list<>", "") } data-items={ JSON.parse(localStorage.getItem(key)).length } />,
            listContainer
        );
    }
});

// RENDER create list button:
render((
    <div className="card-inline card card-body back-dark">
        <p className="lead text-center">
            Create a new list
            <span className="badge badge-pill badge-success back-pink" style="margin-left: 5px;"><b>+</b></span>
        </p>
        <a className="full-width btn btn-outline-success" href="/todo.html">
            Add a list!
        </a>
    </div>
), listContainer);