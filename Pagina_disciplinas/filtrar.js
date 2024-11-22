const disciplinas = [
    {
        titulo: "Curso grátis de Banco de Dados",
        descricao: "Aprenda a utilizar um banco de dados, com todas as suas funções e lógicas!",
        link: "../Pagina_disciplina/Banco_modulo1/banco1.html",
        image: "../img/banco1.png",
        dificuldade: "[Fácil]",
        categoria: "back-end"
    },
    {
        titulo: "Curso grátis de JAVA",
        descricao: "Aprenda a programar em Java!",
        link: "../Pagina_disciplina/Java_modulo1/java1.html",
        image: "",
        dificuldade: "[Fácil]",
        categoria: "back-end"
    },
];

const cardContainer = document.querySelector(".cards");
const pesquisarInput = document.querySelector("#pesquisarInput");
const filtroCategorias = document.querySelector(".filtro_categorias");

let categoriaAtual = "todas"; // Categoria padrão

const verDisciplinas = (disciplinas) => {
    cardContainer.innerHTML = "";
    if (disciplinas.length === 0) {
        cardContainer.innerHTML = `<p>Nenhuma disciplina encontrada.</p>`;
        return;
    }
    disciplinas.forEach(e => {
        cardContainer.innerHTML += `
        <div class="card">
            <img src="${e.image}" alt="Imagem da disciplina">
            <h2>${e.titulo}</h2> 
            <p>${e.descricao}</p>
            <h2>${e.dificuldade}</h2>
            <a href="${e.link}">Veja mais</a>
        </div>`;
    });
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
