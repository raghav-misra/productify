// Array.flat replacement:
function flatten(arr: any[]) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

// Add Props to an HTMLElement:
function addProps(element: HTMLElement, props: { [key: string]: any }) {
    Object.keys(props).forEach((k: string) => {
        if(!props.hasOwnProperty(k)) return;
        // Create Key & Value
        const key = k.trim().toLowerCase();
        const value = props[k];
        
        // If Event:
        if(key.startsWith("$") && (typeof value).toLowerCase() === "function") {
            element.addEventListener(key.replace("$", ""), value);
        }

        // If Style:
        else if(key === "style" && (typeof value).toLowerCase() === "object") {
            let styleTag = "";
            Object.keys(value).forEach((rule: string) => {
                if(!value.hasOwnProperty(rule)) return;
                styleTag += `${rule.trim()}:${value[rule].toString().trim()};`;
            });
            element.setAttribute("style", styleTag);
        }

        // If ClassName:
        else if(key === "classname" && Array.isArray(value)) {
            element.setAttribute("class", value.join(" "));
        }

        // If className no array:
        else if (key === "classname") {
            element.setAttribute("class", value);
        }

        // Fallback:
        else {
            element.setAttribute(key, value);
        }
    });
}

// Factory Function:
export function h(tag: (string | Function), props: Object = {}, ...children: any[]) {
    props = props || Object.create(null);
    children = flatten(children);

    // If Function:
    if ((typeof tag).toLowerCase() === "function") {
        return (tag as Function)(props, children);
    }

    // Create Element/Fragment:
    let element: (HTMLElement | DocumentFragment);

    if(tag == "fragment") {
        element = document.createDocumentFragment();
    }
    else {
        element = document.createElement(tag as string);
        // Add props:
        addProps(element, props);
    }

    // Render Children:
    children.forEach(child => render(child, element));

    return element;
}

// Render Function:
export function render(child: (Node | string), parent: Node = document.body){
    if((typeof child) === "string") parent.appendChild(document.createTextNode(child as string));
    else parent.appendChild(child as Node);
}