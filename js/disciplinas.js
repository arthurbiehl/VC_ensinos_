const disciplinas = [
    {
        titulo: "Curso grátis de Banco de Dados",
        descricao: "Aprenda a utilizar um banco de dados, com todas as suas funções e lógicas!",
        link: "../Pagina_disciplina/Banco_modulo1/banco1.html",
        image: "../img/banco1.png",
        dificuldade: "Fácil",
        categoria: "back-end",
        duracao: "20h"
    },
    {
        titulo: "Curso grátis de JAVA",
        descricao: "Aprenda a programar em Java!",
        link: "../Pagina_disciplina/Java_modulo1/java1.html",
        image: "../img/java1.png",
        dificuldade: "Fácil",
        categoria: "back-end"
    },
    {
        titulo: "Ilustrator",
        descricao: "Faça seus supers desenhos!!",
        link: "../Pagina_disciplina/illustrator/illustrator.html",
        image: "../img/illustrator.png",
        dificuldade: "Fácil",
        categoria: "front-end",
    },
    {
        titulo: "Ilustrator",
        descricao: "Faça seus supers desenhos!!",
        link: "../Pagina_disciplina/illustrator/illustrator.html",
        image: "../img/illustrator.png",
        dificuldade: "[Fácil]",
        categoria: "front-end",

    },
    {
        titulo: "Ilustrator",
        descricao: "Faça seus supers desenhos!!",
        link: "../Pagina_disciplina/illustrator/illustrator.html",
        image: "../img/illustrator.png",
        dificuldade: "[Fácil]",
        categoria: "front-end",
    },
    {
        titulo: "Ilustrator",
        descricao: "Faça seus supers desenhos!!",
        link: "../Pagina_disciplina/illustrator/illustrator.html",
        image: "../img/illustrator.png",
        dificuldade: "[Fácil]",
        categoria: "front-end",
    },
];

const cardContainer = document.querySelector(".cards");
const pesquisarInput = document.querySelector("#pesquisarInput");
const filtroCategorias = document.querySelector(".filtro_categorias");
const painelButton = document.getElementById("painelButton");

painelButton.addEventListener("click", () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("Você precisa estar logado para acessar o Painel de Usuário!");
        window.location.href = "../pages/cadastro.html";
    } else {
        window.location.href = "../pages/painel_usuario.html";
    }
});

let categoriaAtual = "todas";

const verDisciplinas = (disciplinas) => {
    cardContainer.innerHTML = "";
    if (disciplinas.length === 0) {
        cardContainer.innerHTML =
            `
        <div class="naoEncontrado">
            <img src="../img/naoEncontrado.png" alt="">
            <p>Nenhuma disciplina encontrada.</p>
        </div>
        `;
        return;
    }

    disciplinas.forEach(e => {
        cardContainer.innerHTML += `
    <div class="card" data-id="${e.titulo}">
        <div class="container_card">
            <div class="foto_card">
                <img src="${e.image}" alt="">
            </div>
            <div class="duracao_card">
                <img src="../img/duracao.png" alt="">
                <h2>${e.duracao}</h2>
            </div>
            <div class="escrita_card">
                <h1>${e.titulo}</h1>
            </div>
            <div class="dificuldade_card">
                <img src="../img/difficult.png" alt="">
                <h2>${e.dificuldade}</h2>
            </div>
        </div>

        

        <div class="descricao">
            <div class="foto_card">
                <img src="${e.image}" alt="">
                <button class="btn-favoritar" data-titulo="${e.titulo}">
                <img src="../img/curtir.png" alt="">
            </button>
            </div>
            <h2>${e.titulo}</h2>
            <p>${e.descricao}</p>
            <div class="links-hover">
                <a href="#" class="btn-ver-mais" data-link="${e.link}">Veja mais</a>
            </div>
        </div>
    </div>


        `;
    });

    // Adiciona evento de clique aos botões "Veja mais"
    const links = document.querySelectorAll(".btn-ver-mais");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            verificarAcesso(link.dataset.link);
        });
    });
};

const verificarAcesso = (link) => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        // Caso o usuário não esteja logado
        alert("Você precisa estar logado para acessar este curso!");
    } else {
        // Caso o usuário esteja logado, permite o acesso ao curso
        window.location.href = link;
    }
};

const filtrarDisciplinas = () => {
    const termoBusca = pesquisarInput.value.toLowerCase();
    const disciplinasFiltradas = disciplinas.filter(disciplina => {
        const condicaoBusca = disciplina.titulo.toLowerCase().includes(termoBusca);
        const condicaoCategoria = categoriaAtual === "todas" || disciplina.categoria === categoriaAtual;
        return condicaoBusca && condicaoCategoria;
    });
    verDisciplinas(disciplinasFiltradas);
};

pesquisarInput.addEventListener("keyup", filtrarDisciplinas);

filtroCategorias.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        categoriaAtual = e.target.dataset.categoria;
        filtrarDisciplinas();
    }
});

window.addEventListener("load", filtrarDisciplinas);

// funcao de favoritar os cursos

const getUsuarioFavoritos = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) return [];
    return JSON.parse(localStorage.getItem(`favoritos_${loggedInUser}`)) || [];
};

const salvarUsuarioFavoritos = (favoritos) => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        localStorage.setItem(`favoritos_${loggedInUser}`, JSON.stringify(favoritos));
    }
};

let favoritos = getUsuarioFavoritos();

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-favoritar")) {
        const titulo = e.target.dataset.titulo;
        const disciplina = disciplinas.find(d => d.titulo === titulo);

        if (favoritos.some(f => f.titulo === titulo)) {
            favoritos = favoritos.filter(f => f.titulo !== titulo);
            alert(`${titulo} foi removido dos favoritos.`);
        } else {
            favoritos.push(disciplina);
            alert(`${titulo} foi adicionado aos favoritos!`);
        }

        salvarUsuarioFavoritos(favoritos);
    }
});

// painel aparecer

window.addEventListener("load", () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const painelButton = document.getElementById("painel-btn");

    if (loggedInUser) {
        painelButton.style.display = "inline-block"; // Exibe o botão se logado
    } else {
        painelButton.style.display = "none"; // Esconde o botão se não logado
    }
});





