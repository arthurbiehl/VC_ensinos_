
const authButtons = document.getElementById("cadastro");
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
        <a href="../pages/cadastro.html" class="btn">Cadastre-se</a>
        `;
    }
}
renderButtons();



