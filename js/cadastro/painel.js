// Obtém o e-mail do usuário logado
const email = localStorage.getItem("loggedInUser");
const userEmailElement = document.getElementById("user-email");

if (email) {
  userEmailElement.textContent = `${email}`;
} else {
  userEmailElement.textContent = "Nenhum usuário logado.";
}


