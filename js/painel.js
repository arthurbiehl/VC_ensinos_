document.addEventListener("DOMContentLoaded", () => {
    const usernameDisplay = document.getElementById("username-display");
    const logoutButton = document.getElementById("logout-button");

    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        window.location.href = "../pages/cadastro.html";
    } else {
        usernameDisplay.textContent = loggedInUser;
    }

    // Função de logout
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        alert("Você saiu da sua conta!");
        window.location.href = "../pages/cadastro.html";
    });
});

// mostrar os favoritos

const favoritosContainer = document.querySelector(".container_favoritos");
const favoritosPainel = JSON.parse(localStorage.getItem("favoritos")) || [];

const carregarFavoritosPainel = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        favoritosContainer.innerHTML = "<p>Por favor, faça login para ver seus favoritos.</p>";
        return;
    }

    const favoritosPainel = JSON.parse(localStorage.getItem(`favoritos_${loggedInUser}`)) || [];
    favoritosContainer.innerHTML = "";

    if (favoritosPainel.length === 0) {
        favoritosContainer.innerHTML = "<p>Você ainda não tem favoritos!</p>";
        return;
    }

    favoritosPainel.forEach(fav => {
        favoritosContainer.innerHTML += `
            <div class="favorito_card">
                <h3>${fav.titulo}</h3>
                <p>${fav.descricao}</p>
                <a href="${fav.link}" target="_blank">Acessar Curso</a>
            </div>
        `;
    });
};

window.addEventListener("load", carregarFavoritosPainel);


