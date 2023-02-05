const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todo");

const TODOS_KEY = "todos";

let toDos = [];

function fnSaveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  if (newTodo) {
    const newObject = {
      val: newTodo,
      id: Date.now(),
    };

    toDos.push(newObject);
    fnPaintTodo(newObject);
    fnSaveToDos();
  }
}

function fnPaintTodo(newObject) {
  const li = document.createElement("li");
  li.id = newObject.id;
  const span = document.createElement("span");
  const delSpan = document.createElement("span");
  span.innerText = newObject.val;
  delSpan.className = "delSpan";
  delSpan.innerText = `❌`;
  delSpan.addEventListener("click", fnDeleteTodo);
  li.appendChild(span);
  li.appendChild(delSpan);
  todoList.appendChild(li);
}

function fnDeleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  fnSaveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(fnPaintTodo);
}
