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
        image: "../img/java1.png",
        dificuldade: "[Fácil]",
        categoria: "back-end"
    },
    {
        titulo: "Computacao Grafica",
        descricao: "Faça seus supers desenhos!!",
        link: "../Pagina_disciplina/Computacao_modulo1/computacao1.html",
        image: "../img/computacao1.png",
        dificuldade: "[Fácil]",
        categoria: "front-end"
    },

];

const cardContainer = document.querySelector(".cards");
const pesquisarInput = document.querySelector("#pesquisarInput");
const filtroCategorias = document.querySelector(".filtro_categorias");

let categoriaAtual = "todas"; // Categoria padrão

const verDisciplinas = (disciplinas) => {
    cardContainer.innerHTML = "";
    if (disciplinas.length === 0) {
        cardContainer.innerHTML = 
        `

        <p>Nenhuma disciplina encontrada.</p>

        `;
        return;
    }
    disciplinas.forEach(e => {
        cardContainer.innerHTML += `

        <div class="card">
            <div class="container_card">
                <div class="escrita_card">
                    <h1>${e.titulo}</h1>
                    <p>${e.descricao}</p>
                    <div class="dificuldade_card">
                        <img src="../img/difficult.png" alt="">
                        <h2>${e.dificuldade}</h2>
                    </div>

                </div>
                <div class="foto_card">
                    <img src="${e.image}" alt="">
                </div>
            
            </div>
            <a href="${e.link}">Veja mais</a>
        
        </div>
        `;
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
