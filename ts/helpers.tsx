export interface IAttributes {
    [name: string]: (string | Function);
}

/* Element Factory */
export function h(tagName: string, props: IAttributes, ...children: (string | Node)[]) {
    // Make sure everything is defined:
    props = props || {};
    children = children || [];

    // Initialize element:
    const element = document.createElement(tagName);

    // Add props:
    Object.keys(props).forEach((name) => {
        // If it is an event:
        if(typeof(props[name]) === "function" && name.startsWith("$")) {
            element.addEventListener(
                name, props[name] as EventListener
            );
        }

        // Otherwise it's an attribute:
        else element.setAttribute(name, props[name] as string);
    });

    // Add children:
    children.forEach(child => render(child, element));
}

/* Better appendChild */
export function render(child: (Node | string), parent: Node) {
    // If it's a string
    if(typeof(child) === "string") {
        parent.appendChild(
            document.createTextNode(child)
        );
    }

    // If it's falsy:
    else if(!child) return;

    // Else (assume it's a node):
    else parent.appendChild(child);
}