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
const auth = getAuth(app);

// Função de cadastro
const registerForm = document.getElementById("register-form");
const errorMessage = document.getElementById("error-message");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const nome = document.getElementById("nome").value;
  const password = document.getElementById("password").value;

  // Limpar mensagens de erro
  errorMessage.textContent = "";

  // Validação: Senha deve ter pelo menos 6 caracteres
  if (password.length < 6) {
    errorMessage.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return;
  }

  // Validação: Nome ou e-mail não podem estar vazios
  if (!nome || !email) {
    errorMessage.textContent = "O nome e o e-mail são obrigatórios.";
    return;
  }

  try {
    // Tentar cadastrar o usuário
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Atualizar o perfil do usuário com o nome
    await updateProfile(user, { displayName: nome });
    console.log("Nome de usuário atualizado:", nome);

    // Redirecionar para a página de login
    window.location.href = "index.html";
  } catch (error) {
    // Tratar erros do Firebase
    if (error.code === "auth/email-already-in-use") {
      errorMessage.textContent = "O e-mail já está em uso.";
    } else if (error.code === "auth/invalid-email") {
      errorMessage.textContent = "O e-mail fornecido é inválido.";
    } else {
      errorMessage.textContent = "Erro ao cadastrar: " + error.message;
    }
    console.error("Erro ao cadastrar:", error.message);
  }
});
