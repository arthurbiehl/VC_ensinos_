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
    appId: "1:1083943850886:web:a56dd998f5652924695207"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Obter a instância de autenticação
const auth = getAuth(app);

// Verificar se o usuário está autenticado
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Usuário está logado
    document.getElementById('user-info').textContent = `Logado como: ${user.email};`
  } else {
    // Usuário não está logado, redirecionar para a página de login
    window.location.href = 'index.html';
  }
});

// Função de logout
const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      // Logout bem-sucedido, redirecionar para a página de login
      window.location.href = 'index.html';
    })
    .catch((error) => {
      console.error('Erro ao fazer logout:', error.message);
    });
});