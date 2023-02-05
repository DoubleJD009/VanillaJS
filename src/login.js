// const imgList = [];

const loginForm = document.querySelector("#loginForm");
const content = document.querySelector("#content");

function fnLogin(event) {
  event.preventDefault();
  const userName = document.querySelector("#userName");
  localStorage.setItem("userName", userName.value);
  loginForm.style.display = "none";
}

loginForm.addEventListener("submit", fnLogin);
