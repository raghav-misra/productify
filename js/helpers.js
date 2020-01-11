/* Element Factory */
export function h(tagName, props, ...children) {
    // Make sure everything is defined:
    props = props || {};
    children = children || [];
    // Initialize element:
    const element = document.createElement(tagName);
    // Add props:
    Object.keys(props).forEach((name) => {
        // If it is an event:
        if (typeof (props[name]) === "function" && name.startsWith("$")) {
            element.addEventListener(name, props[name]);
        }
        // Otherwise it's an attribute:
        else
            element.setAttribute(name, props[name]);
    });
    // Add children:
    children.forEach(child => render(child, element));
}
/* Better appendChild */
export function render(child, parent) {
    // If it's a string
    if (typeof (child) === "string") {
        parent.appendChild(document.createTextNode(child));
    }
    // If it's falsy:
    else if (!child)
        return;
    // Else (assume it's a node):
    else
        parent.appendChild(child);
}
export class Component extends HTMLElement {
    // Render on connected
    connectedCallback() {
        render(this.render, this);
    }
    // Remove on disconnected
    disconnectedCallback() {
        while (this.firstChild)
            this.removeChild(this.firstChild);
    }
    // this.render returns children
    get render() { return; }
}
