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
                <h2>${fav.titulo}</h2>
                <p>${fav.descricao}</p>
                <img src="${fav.image}"></img>
                <a href="${fav.link}" target="_blank">Acessar Curso</a>
            </div>
        `;
    });
};

window.addEventListener("load", carregarFavoritosPainel);

// ver se esta logado ou nao para aparecer

window.addEventListener("load", () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    
    if (!loggedInUser) {
        // Redireciona para a página de login caso não esteja logado
        alert("Você precisa estar logado para acessar o painel!");
        window.location.href = "../pages/cadastro.html";
    } else {
        // Carrega os dados do painel (favoritos, etc.)
        carregarFavoritosPainel();
    }
});




