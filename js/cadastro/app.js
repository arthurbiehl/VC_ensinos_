// Importar os módulos necessários
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDn4IoMfe7U97yVnHvMlP7xDmDzxFDpUlg",
    authDomain: "vcensinos.firebaseapp.com",
    projectId: "vcensinos",
    storageBucket: "vcensinos.firebasestorage.app",
    messagingSenderId: "1083943850886",
    appId: "1:1083943850886:web:a56dd998f5652924695207"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Obter os elementos do formulário de login e mensagens de erro
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message"); // Elemento para mostrar a mensagem de erro
const successMessage = document.getElementById("success-message"); // Elemento para mostrar a mensagem de sucesso

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Limpa mensagens anteriores
  errorMessage.textContent = "";
  successMessage.textContent = "";

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Usuário logado:", userCredential.user);
      
      // Exibe mensagem de sucesso
      successMessage.textContent = "Login bem-sucedido! Redirecionando...";
      successMessage.style.color = "green"; // Mensagem de sucesso em verde

      // Salva o email do usuário no localStorage
      localStorage.setItem("loggedInUser", userCredential.user.email);
      
      // Redireciona para a página principal após 2 segundos
      setTimeout(() => {
        window.location.href = "../pages/index.html";
      }, 2000);
    })
    .catch((error) => {
      console.error("Erro ao fazer login:", error.message);

      // Exibe mensagem de erro
      if (error.code === "auth/user-not-found") {
        errorMessage.textContent = "E-mail não encontrado.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage.textContent = "Senha incorreta.";
      } else {
        errorMessage.textContent = "Erro ao tentar fazer login. Tente novamente.";
      }
      errorMessage.style.color = "red"; // Mensagem de erro em vermelho
    });
});
