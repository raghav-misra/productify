// Array.flat replacement:
function flatten(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}
// Add Props to an HTMLElement:
function addProps(element, props) {
    Object.keys(props).forEach((k) => {
        if (!props.hasOwnProperty(k))
            return;
        // Create Key & Value
        const key = k.trim().toLowerCase();
        const value = props[k];
        // If Event:
        if (key.startsWith("$") && (typeof value).toLowerCase() === "function") {
            element.addEventListener(key.replace("$", ""), value);
        }
        // If Style:
        else if (key === "style" && (typeof value).toLowerCase() === "object") {
            let styleTag = "";
            Object.keys(value).forEach((rule) => {
                if (!value.hasOwnProperty(rule))
                    return;
                styleTag += `${rule.trim()}:${value[rule].toString().trim()};`;
            });
            element.setAttribute("style", styleTag);
        }
        // If ClassName:
        else if (key === "classname" && Array.isArray(value)) {
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
export function h(tag, props = {}, ...children) {
    props = props || Object.create(null);
    children = flatten(children);
    // If Function:
    if ((typeof tag).toLowerCase() === "function") {
        return tag(props, children);
    }
    // Create Element/Fragment:
    let element;
    if (tag == "fragment") {
        element = document.createDocumentFragment();
    }
    else {
        element = document.createElement(tag);
        // Add props:
        addProps(element, props);
    }
    // Render Children:
    children.forEach(child => render(child, element));
    return element;
}
// Render Function:
export function render(child, parent = document.body) {
    if ((typeof child) === "string")
        parent.appendChild(document.createTextNode(child));
    else
        parent.appendChild(child);
}
