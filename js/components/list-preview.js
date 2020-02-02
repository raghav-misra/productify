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
import { h, render } from "../helpers.js";
var ListPreview = /** @class */ (function (_super) {
    __extends(ListPreview, _super);
    function ListPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListPreview.prototype.connectedCallback = function () {
        render((h("div", { className: "card-inline card card-body back-dark" },
            h("p", { className: "lead text-center" },
                this.dataset.todoList,
                h("span", { className: "badge badge-pill badge-success back-pink", title: this.dataset.items + " items in the list", style: "margin-left: 5px;" }, this.dataset.items)),
            h("a", { className: "full-width btn btn-outline-success", href: "/todo.html?" + this.dataset.todoList }, "Enter List View"))), this);
    };
    return ListPreview;
}(HTMLElement));
export { ListPreview };
