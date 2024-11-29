
const userName = localStorage.getItem("loggedInUserName");
const userNameElement = document.getElementById("user-name");

if (userName) {
  userNameElement.textContent = `${userName}`;
} else {
  userNameElement.textContent = "Nenhum usuário logado.";
}
