/* Form Handling */
let addTodoForm = document.forms[0];
addTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("OMG Submitted");
});
