
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");
const toggleLogin = document.getElementById("toggle-login");
const toggleRegister = document.getElementById("toggle-register");

toggleLogin.addEventListener("click", () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
    errorMessage.textContent = "";
});

toggleRegister.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    errorMessage.textContent = "";
});

// registrar
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (localStorage.getItem(username)) {
        errorMessage.textContent = "Usuário já registrado!";
        return;
    }

    localStorage.setItem(username, password);
    errorMessage.textContent = "Registrado com sucesso! Faça login.";

    registerForm.style.display = "none";
    loginForm.style.display = "block";
});

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Verificar credenciais
    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        errorMessage.textContent = "Login bem-sucedido!";
        errorMessage.style.color = "green";

        // Servidor local - aqui salva
        localStorage.setItem("loggedInUser", username);

        // Leva para pagina inicial
        setTimeout(() => {
            window.location.href = "../Pagina_inicial/index.html";
        }, 1000);
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos!";
        errorMessage.style.color = "red";
    }
});




