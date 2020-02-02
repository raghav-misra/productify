// Array.flat replacement:
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}
// Add Props to an HTMLElement:
function addProps(element, props) {
    Object.keys(props).forEach(function (k) {
        if (!props.hasOwnProperty(k))
            return;
        // Create Key & Value
        var key = k.trim().toLowerCase();
        var value = props[k];
        // If Event:
        if (key.startsWith("$") && (typeof value).toLowerCase() === "function") {
            element.addEventListener(key.replace("$", ""), value);
        }
        // If Style:
        else if (key === "style" && (typeof value).toLowerCase() === "object") {
            var styleTag_1 = "";
            Object.keys(value).forEach(function (rule) {
                if (!value.hasOwnProperty(rule))
                    return;
                styleTag_1 += rule.trim() + ":" + value[rule].toString().trim() + ";";
            });
            element.setAttribute("style", styleTag_1);
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
export function h(tag, props) {
    if (props === void 0) { props = {}; }
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    props = props || Object.create(null);
    children = flatten(children);
    // If Function:
    if ((typeof tag).toLowerCase() === "function") {
        return tag(props, children);
    }
    // Create Element/Fragment:
    var element;
    if (tag == "fragment") {
        element = document.createDocumentFragment();
    }
    else {
        element = document.createElement(tag);
        // Add props:
        addProps(element, props);
    }
    // Render Children:
    children.forEach(function (child) { return render(child, element); });
    return element;
}
// Render Function:
export function render(child, parent) {
    if (parent === void 0) { parent = document.body; }
    if ((typeof child) === "string")
        parent.appendChild(document.createTextNode(child));
    else
        parent.appendChild(child);
}
