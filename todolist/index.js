const input = document.getElementById("task");
const todoList = document.querySelector("#list");

todoList.addEventListener("click", deleteCheck);

var myToastSuccess = document.querySelector(".toast-success");

var bsToastSuccess = new bootstrap.Toast(myToastSuccess);

var myToastError = document.querySelector(".toast-error");
var bsToastError = new bootstrap.Toast(myToastError);

const newElement = () => {
  if (input.value.trim() != "") {
    const todoDiv = document.createElement("div");

    const newTodo = document.createElement("li");
    newTodo.classList.add("d-flex", "justify-content-between", "todo-item");
    newTodo.innerText = input.value;
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="bi bi-x remove-btn"></i>';
    trashButton.classList.add("trash-btn");

    newTodo.appendChild(trashButton);

    todoList.appendChild(newTodo);
    bsToastSuccess.show();
    const todoItems = document.querySelectorAll(".todo-item");
    todoItems.forEach((items) => {
      items.addEventListener("click", handleItemClick);
    });
  } else {
    bsToastError.show();
  }
};

function deleteCheck(event) {
  const clickedItem = event.target;

  if (clickedItem.classList.contains("remove-btn")) {
    clickedItem.parentElement.parentElement.remove();
  }
}
function handleItemClick(event) {
  const clickedItem = event.target;

  console.log("handleItemClick", clickedItem);

  const todoItems = clickedItem.closest(".todo-item");

  if (todoItems) {
    todoItems.classList.toggle("checked");
  }
}
