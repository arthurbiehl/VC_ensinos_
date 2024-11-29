// Importar os módulos necessários do Firebase (via CDN ou local)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDn4IoMfe7U97yVnHvMlP7xDmDzxFDpUlg",
    authDomain: "vcensinos.firebaseapp.com",
    projectId: "vcensinos",
    storageBucket: "vcensinos.firebasestorage.app",
    messagingSenderId: "1083943850886",
    appId: "1:1083943850886:web:a56dd998f5652924695207"
};

// Inicializar o Firebase App
const app = initializeApp(firebaseConfig);
// Inicializar o serviço de autenticação
const auth = getAuth(app);

// Função de cadastro
const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const nome = document.getElementById("nome").value; // Capturar o nome
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Cadastro bem-sucedido
      const user = userCredential.user;

      // Atualizar o perfil do usuário com o nome
      updateProfile(user, {
        displayName: nome
      }).then(() => {
        console.log("Nome de usuário atualizado:", nome);
        // Redirecionar para a página de login
        window.location.href = "../pages/login.html";
      }).catch((error) => {
        console.error("Erro ao atualizar o nome de usuário:", error.message);
      });
    })
    .catch((error) => {
      console.error("Erro ao cadastrar:", error.message);
    });
});
