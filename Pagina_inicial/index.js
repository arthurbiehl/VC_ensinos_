
const authButtons = document.getElementById("auth-buttons");
const loggedInUser = localStorage.getItem("loggedInUser");


function renderButtons() {
    if (loggedInUser) {
        
        authButtons.innerHTML = `
      <button class="btn" id="logout-button">Sair</button>
    `;

        document.getElementById("logout-button").addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            alert("Você saiu!");
            location.reload();
        });
    } else {
        authButtons.innerHTML = 
        `
        <a href="cadastro-conta/cadastro.html" class="btn">Cadastre-se</a>
        `;
    }
}
renderButtons();



