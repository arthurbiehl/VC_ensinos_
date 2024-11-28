const email = localStorage.getItem("loggedInUser");
const userEmailElement = document.getElementById("user-email");

if (email) {
  userEmailElement.textContent = `E-mail: ${email}`;
} else {
  userEmailElement.textContent = "Nenhum usuário logado.";
}
