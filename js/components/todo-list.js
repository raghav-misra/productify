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
var TodoList = /** @class */ (function (_super) {
    __extends(TodoList, _super);
    function TodoList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TodoList.prototype.connectedCallback = function () {
        // Render Children
        render((h("fragment", null,
            h("div", null,
                h("a", { className: "text-info", "$click": this.clearItems.bind(this) }, "Clear All Items"),
                h("a", { className: "text-info", "$click": this.removeStorage.bind(this) }, "Delete this list")),
            h("div", { "data-item-target": true }))), this);
        this.renderTarget = this.querySelector("[data-item-target]");
    };
    /* Add & Remove 'Listeners' */
    TodoList.prototype.addItem = function (itemString) {
        render(h("todo-item", { "data-todo": itemString }), this.renderTarget);
        // Update local storage:
        this.setStorage();
    };
    TodoList.prototype.removeItem = function (existingItem) {
        // Remove the item:
        this.renderTarget.removeChild(existingItem);
        // Update local storage:
        this.setStorage();
    };
    /* Serialise localStorage JSON */
    TodoList.prototype.setStorage = function () {
        var todoArray = [];
        this.renderTarget.querySelectorAll("todo-item").forEach(function (item) {
            if (item.dataset.todo)
                todoArray.push(item.dataset.todo);
        });
        window.localStorage.setItem(this.storageKey, JSON.stringify(todoArray));
    };
    TodoList.prototype.getStorage = function () {
        var _this = this;
        var items = JSON.parse(window.localStorage.getItem(this.storageKey) || "[]");
        items.forEach((function (name) { return _this.addItem(name); }).bind(this));
    };
    TodoList.prototype.removeStorage = function () {
        if (confirm("Are you sure you want to delete this list?")) {
            localStorage.removeItem(this.storageKey);
            location.href = '/';
        }
    };
    /* clear all */
    TodoList.prototype.clearItems = function () {
        if (confirm("Are you sure you want to clear all items?")) {
            while (this.renderTarget.firstChild) {
                this.renderTarget.removeChild(this.renderTarget.firstChild);
            }
            this.setStorage();
        }
    };
    return TodoList;
}(HTMLElement));
export { TodoList };
