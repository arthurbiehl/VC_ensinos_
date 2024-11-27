// Importar os módulos necessários do Firebase (via CDN ou local)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Cadastro bem-sucedido
      console.log("Usuário cadastrado:", userCredential.user);
      // Redirecionar para a página de login
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Erro ao cadastrar:", error.message);
    });
});