var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { h, render } from '../helpers.js';
var parentList = document.querySelector("todo-list");
var TodoItem = /** @class */ (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TodoItem.prototype.connectedCallback = function () {
        // Render Children
        render((h("fragment", null,
            h("br", null),
            h("div", { className: "alert alert-primary fade show", role: "alert" },
                h("span", { "$input": this.changeTodo.bind(this), "data-text-target": true, contentEditable: true }, this.dataset.todo),
                h("button", { "$click": this.close.bind(this), type: "button", className: "close", "data-dismiss": "alert", "aria-label": "Close" },
                    h("span", { "aria-hidden": "true" }, "\u00D7"))))), this);
        // Todo Text Target:
        this.textTarget = this.querySelector("[data-text-target]");
    };
    TodoItem.prototype.close = function () {
        parentList.removeItem(this);
    };
    TodoItem.prototype.changeTodo = function () {
        this.dataset.todo = this.textTarget.innerText;
        parentList.setStorage();
    };
    Object.defineProperty(TodoItem.prototype, "todo", {
        get: function () { return this.dataset.todo; },
        set: function (newValue) {
            this.dataset.todo = newValue;
            this.textTarget.innerText = newValue;
        },
        enumerable: true,
        configurable: true
    });
    return TodoItem;
}(HTMLElement));
export { TodoItem };
