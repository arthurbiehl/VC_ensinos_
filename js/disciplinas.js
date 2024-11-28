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
    // Mais cursos aqui...
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

// Função para exibir as disciplinas filtradas
const verDisciplinas = (disciplinas) => {
    cardContainer.innerHTML = "";
    if (disciplinas.length === 0) {
        cardContainer.innerHTML = `
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


// Função para filtrar disciplinas com base no que o usuário digitar
const filtrarDisciplinas = () => {
    const termoBusca = pesquisarInput.value.toLowerCase();
    const disciplinasFiltradas = disciplinas.filter(disciplina => {
        const condicaoBusca = disciplina.titulo.toLowerCase().includes(termoBusca);
        const condicaoCategoria = categoriaAtual === "todas" || disciplina.categoria === categoriaAtual;
        return condicaoBusca && condicaoCategoria;
    });
    verDisciplinas(disciplinasFiltradas);
};

// Adiciona o filtro de disciplinas à pesquisa do usuário
pesquisarInput.addEventListener("keyup", filtrarDisciplinas);

// Filtro por categoria
filtroCategorias.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        categoriaAtual = e.target.dataset.categoria;
        filtrarDisciplinas();
    }
});

window.addEventListener("load", filtrarDisciplinas);

// Seleciona todos os botões de favoritar
const botoesFavoritar = document.querySelectorAll(".btn-favoritar");

botoesFavoritar.forEach((botao) => {
    botao.addEventListener("click", (e) => {
        const titulo = e.target.dataset.titulo; // Nome do curso
        const link = e.target.dataset.link; // Link do curso

        // Recupera os favoritos atuais do localStorage ou cria um novo array
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

        // Adiciona o novo favorito ao array
        favoritos.push({ titulo, link });

        // Salva os favoritos no localStorage
        localStorage.setItem("favoritos", JSON.stringify(favoritos));

        alert(`Curso "${titulo}" foi adicionado aos favoritos!`);
    });
});


// Função para lidar com o clique no botão "Veja mais"
const verificarAcesso = (link) => {
    const loggedInUser = localStorage.getItem("loggedInUser"); // Recupera o valor do localStorage
    if (!loggedInUser) {
        alert("Você precisa estar logado para acessar este curso!");
        window.location.href = "../pages/login.html";  // Redireciona para a página de login
    } else {
        window.location.href = link;  // Se estiver logado, permite acessar o curso
    }
};

// Selecionando todos os botões "Veja mais"
const botoesVerMais = document.querySelectorAll(".btn-ver-mais");

botoesVerMais.forEach((botao) => {
    botao.addEventListener("click", (e) => {
        // Aqui, você pega o link da disciplina que o usuário quer acessar
        const linkCurso = e.target.dataset.link; // Certifique-se de que cada botão tem o atributo 'data-link' com o URL do curso
        verificarAcesso(linkCurso);
    });
});



