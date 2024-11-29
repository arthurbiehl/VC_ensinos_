
const cards_exibir = [
    {
        titulo: "Curso grátis de Banco de Dados",
        descricao: "Aprenda a utilizar um banco de dados, com todas as suas funções e lógicas!",
        image: "../img/banco1.png",
        dificuldade: "Fácil",
        categoria: "back-end",
        duracao: "20h"
    },
    {
        titulo: "Curso grátis de JAVA",
        descricao: "Aprenda a programar em Java!",
        image: "../img/java1.png",
        dificuldade: "Fácil",
        categoria: "back-end"
    },
    {
        titulo: "Ilustrator",
        descricao: "Faça seus supers desenhos!!",
        image: "../img/illustrator.png",
        dificuldade: "Fácil",
        categoria: "front-end",
    }
]

const container_cards_exibir = document.querySelector("#cards_exibir");

const verCards = (ver) => {
    container_cards_exibir.innerHTML = "";

    ver.forEach(a => {
        container_cards_exibir.innerHTML += `
                <div class="card" data-id="${a.titulo}">
            <div class="container_card">
                <div class="foto_card">
                    <img src="${a.image}" alt="">
                </div>
                <div class="duracao_card">
                    <img src="../img/duracao.png" alt="">
                    <h2>${a.duracao}</h2>
                </div>
                <div class="escrita_card">
                    <h1>${a.titulo}</h1>
                </div>
                <div class="item_dificuldade">
                    <div class="dificuldade_card">
                        <img src="../img/difficult.png" alt="">
                        <h2>${a.dificuldade}</h2>
                    </div>
                    <div class="dificuldade_card">
                        <img src="../img/categoria.png" alt="">
                        <h2>${a.categoria}</h2>
                    </div>
                </div>

            </div>
            <div class="descricao">
                <div class="foto_card">
                    <img src="${a.image}" alt="">
                    <button class="btn-favoritar" data-titulo="${a.titulo}">
                        <img src="../img/curtir.png" alt="">
                    </button>
                </div>
                <h2>${a.titulo}</h2>
                <p>${a.descricao}</p>
                <div class="links-hover">
                    <a href="#" class="btn-ver-mais" data-curso="${a.titulo}">Veja mais</a>
                </div>
            </div>
        </div>
        `
    });
}

verCards(cards_exibir);