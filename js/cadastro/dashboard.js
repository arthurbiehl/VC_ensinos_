import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDn4IoMfe7U97yVnHvMlP7xDmDzxFDpUlg",
  authDomain: "vcensinos.firebaseapp.com",
  projectId: "vcensinos",
  storageBucket: "vcensinos.firebasestorage.app",
  messagingSenderId: "1083943850886",
  appId: "1:1083943850886:web:a56dd998f5652924695207",
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Selecionar os elementos do DOM
const cadastroButton = document.getElementById("cadastre-se");
const painelButton = document.getElementById("painelButton");
const logoutButton = document.getElementById("logout-button");

// Inicializar os botões com estado padrão (não visíveis)
cadastroButton.style.display = "none";
painelButton.style.display = "none";
logoutButton.style.display = "none";

// Verificar se o usuário está autenticado
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Usuário está logado
    painelButton.style.display = "inline-block"; // Mostrar o botão "Painel"
    logoutButton.style.display = "inline-block"; // Mostrar o botão "Logout"
    cadastroButton.style.display = "none"; // Esconder o botão "Cadastre-se"
  } else {
    // Usuário não está logado
    painelButton.style.display = "none"; // Esconder o botão "Painel"
    logoutButton.style.display = "none"; // Esconder o botão "Logout"
    cadastroButton.style.display = "inline-block"; // Mostrar o botão "Cadastre-se"
  }
});

// Evento de clique no botão "Painel" (quando o usuário está logado)
painelButton.addEventListener("click", () => {
  window.location.href = "../pages/painel.html"; // Redireciona para o painel
});

// Evento de clique no botão "Logout"
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("Usuário deslogado.");
      window.location.href = "../pages/login.html"; // Redireciona para a página de login
    })
    .catch((error) => {
      console.error("Erro ao fazer logout:", error.message);
    });
});

// Evento de clique no botão "Cadastre-se"
cadastroButton.addEventListener("click", () => {
  window.location.href = "../pages/register.html"; // Redireciona para a página de cadastro
});
