//Login 처리 js
const loginForm = document.querySelector("#loginForm");
const content = document.querySelector("#content");
const btnLogout = document.querySelector("#btnLogout");

function init() {
  const userName = localStorage.getItem("userName");
  if (userName) {
    fnAfterLogin(userName);
  }
}

function fnLogin(event) {
  event.preventDefault();
  const userName = document.querySelector("#userName").value;
  localStorage.setItem("userName", userName);
  fnAfterLogin(userName);
}

function fnAfterLogin(userName) {
  loginForm.style.display = "none";
  content.style.display = "flex";
  const sayHello = document.querySelector("#sayHello");
  sayHello.textContent = `Hello ${userName}`;
}

function fnLogout() {
  localStorage.setItem("userName", "");
}

init();
loginForm.addEventListener("submit", fnLogin);
btnLogout.addEventListener("click", fnLogout);
