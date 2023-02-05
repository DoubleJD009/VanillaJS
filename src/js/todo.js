const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todo");

const TODOS_KEY = "todos";

let toDos = [];

//data init
function init() {
  const savedToDos = localStorage.getItem(TODOS_KEY);

  if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(fnPaintTodo);
  }
}

// data 저장
function fnSaveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 저장 Submit 통제
function fnHandleToDoSubmit(event) {
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

// 저장 data 그리기
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

// data 삭제
function fnDeleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  fnSaveToDos();
}

todoForm.addEventListener("submit", fnHandleToDoSubmit);

init();
