// Importar os módulos necessários do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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
const logoutButton = document.getElementById("logout-button");
const usernameDisplay = document.getElementById("username-display");

// Verificar o estado de autenticação do usuário
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Exibir o e-mail do usuário no painel
    usernameDisplay.textContent = user.email;
  } else {
    // Redirecionar para a página de login se não estiver autenticado
    window.location.href = "../pages/login.html";
  }
});

// Adicionar evento ao botão de logout
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Após logout, redirecionar para a página de login
      window.location.href = "../pages/login.html";
    })
    .catch((error) => {
      console.error("Erro ao fazer logout:", error.message);
    });
});

// Quando a página carregar, exibe os favoritos
window.addEventListener("DOMContentLoaded", () => {
  const favoritosContainer = document.querySelector(".container_favoritos");

  // Recupera os favoritos do localStorage
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // Exibe cada favorito na página
  favoritos.forEach((favorito) => {
      const favoritoElement = document.createElement("div");
      favoritoElement.classList.add("favorito-card");

      favoritoElement.innerHTML = `
          <h3>${favorito.titulo}</h3>
          <a href="${favorito.link}" target="_blank">Ir para o curso</a>
      `;

      favoritosContainer.appendChild(favoritoElement);
  });
});

