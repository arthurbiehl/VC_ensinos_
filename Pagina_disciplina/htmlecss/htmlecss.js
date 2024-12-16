const caixas = [
    {
        nome: "Introdução",
        subitens: [
            { nome: "Como funciona?", titulo: "Como Funciona", conteudo: "Descrição sobre como funciona." },
            { nome: "O que é?", titulo: "O que é?", conteudo: "Explicação do que é." }
        ]
    },

    //videos
    {
        nome: "Aula 1",
        subitens: [
            {
                nome: "Video 1",
                titulo: "Conteúdo em Vídeo",
                conteudo: "Veja o vídeo explicativo:",
                iframe: "https://www.youtube.com/embed/q3VlhfsrRjc?si=cNzIOZU4_Hvmt85y"
            },
            {
                nome: "Desafio 1",
                titulo: "Resolva o Desafio",
                conteudo: "Complete o formulário abaixo para finalizar o desafio:",
                iframe: "https://docs.google.com/forms/d/e/1FAIpQLSfvWry66l4_BPvOwTIfmv5fJ88tQdLZBFSpBsYLf8Z7qHsH7Q/viewform"
            }
        ]
    },
    {
        nome: "Aula 2",
        subitens: [
            {
                nome: "Video 2",
                titulo: "Conteúdo em Vídeo",
                conteudo: "Veja o vídeo explicativo:",
                iframe: "https://www.youtube.com/embed/q3VlhfsrRjc?si=cNzIOZU4_Hvmt85y"
            },
            {
                nome: "Desafio 2",
                titulo: "Resolva o Desafio",
                conteudo: "Complete o formulário abaixo para finalizar o desafio:",
                iframe: "https://docs.google.com/forms/d/e/1FAIpQLSdtkPw8cAjV5Z-ZoOrdSSfbOSSWYi27QF49IG3w8yY8KHrK6A/viewform"
            }
        ]
    },
    {
        nome: "Aula 3",
        subitens: [
            {
                nome: "Video 3",
                titulo: "Conteúdo em Vídeo",
                conteudo: "Veja o vídeo explicativo:",
                iframe: "https://www.youtube.com/embed/q3VlhfsrRjc?si=cNzIOZU4_Hvmt85y"
            },
            {
                nome: "Desafio 3",
                titulo: "Resolva o Desafio",
                conteudo: "Complete o formulário abaixo para finalizar o desafio:",
                iframe: "https://docs.google.com/forms/d/e/1FAIpQLSdzwr0HlAkBOXbza6aygX9ewXcsgJOn8PEqVa44SgQrZCSUJA/viewform"
            }
        ]
        
    },
    {
        nome: "Aula 4",
        subitens: [
            {
                nome: "Video 4",
                titulo: "Conteúdo em Vídeo",
                conteudo: "Veja o vídeo explicativo:",
                iframe: "https://www.youtube.com/embed/q3VlhfsrRjc?si=cNzIOZU4_Hvmt85y"
            },
            {
                nome: "Desafio 4",
                titulo: "Resolva o Desafio",
                conteudo: "Aqui esta o desafio 4 junto com o conteudo do desafio 3",
                iframe: "https://docs.google.com/forms/d/e/1FAIpQLSfhC1_phUj3MzAkArn48ab__z6UUr3p3pgsLP3SWoDxWXapHg/viewform"
            }
        ]
    },
    {
        nome: "Aula 5",
        subitens: [
            {
                nome: "Video 5",
                titulo: "Conteúdo em Vídeo",
                conteudo: "Veja o vídeo explicativo:",
                iframe: "https://www.youtube.com/embed/q3VlhfsrRjc?si=cNzIOZU4_Hvmt85y"
            },
            {
                nome: "Desafio 5",
                titulo: "Resolva o Desafio",
                conteudo: "...",
                iframe: "https://docs.google.com/forms/d/e/1FAIpQLSfjZyTc5j_xTi2ennPYdI_dkTVp0gqGbe8RKeobWAoSg_awbw/viewform"
            }
        ]
    },

    {
        nome: "Aula 6",
        subitens: [
            {
                nome: "Video 6",
                titulo: "Conteúdo em Vídeo",
                conteudo: "Veja o vídeo explicativo:",
                iframe: "https://www.youtube.com/embed/q3VlhfsrRjc?si=cNzIOZU4_Hvmt85y"
            },
            {
                nome: "Desafio 6",
                titulo: "Resolva o Desafio",
                conteudo: "...",
                iframe: "https://docs.google.com/forms/d/e/1FAIpQLSef0Kekgelo0tH2AvLiVdJCbWzyhq-ZUN2IKVtKvv5CBRtDEA/viewform"
            }
        ]
    },

    // apostilas
    {
        nome: "Apostila",
        subitens: [
            {
                nome: "Apostila 1",
                titulo: "Apostila 1 ",
                conteudo: "Clique no botão para baixar a apostila.",
                dowload: "../../apostilas/htmlecss/apostilas/Apostila1.pdf"
            },
            {
                nome: "Apostila 2",
                titulo: "Apostila 2 ",
                conteudo: "Clique no botão para baixar a apostila.",
                dowload: "../../apostilas/htmlecss/apostilas/Apostila2.pdf"
            },
            {
                nome: "Apostila 3",
                titulo: "Apostila 3 ",
                conteudo: "Clique no botão para baixar a apostila.",
                dowload: "../../apostilas/htmlecss/apostilas/Apostila3.pdf"
            },
            {
                nome: "Apostila 4",
                titulo: "Apostila 4 ",
                conteudo: "Clique no botão para baixar a apostila.",
                dowload: "../../apostilas/htmlecss/apostilas/Apostila4.pdf"
            },
        ]
    },

    // desafio final
    {
        nome: "Desafio Final",
        subitens: [
            {
                nome: "Desafio Final",
                titulo: "Desafio Final",
                conteudo: "Agora vamos colocar a mão na massa! <br> Decorrente a todas as aulas vista's e atividades realizadas, que tal começarmos pra valer?! <br> Você irá exolher entre criar um portfolio pessoal ou um site que mostre sobre algum interesse seu, como alguma série, jogo, filme, cantor e etc. Contendo os conteúdos bases de HTML e CSS vistos. <br> Após terminar seu projeto, o transfira para seu repositório no Github e mande o link par aque possamos avaliar seu projeto!",
                iframe: "https://docs.google.com/forms/d/e/1FAIpQLSeRTSQ8iXHy0Sd6ew4gwdE3-NBq6KwWIc0Mn9RLKKRKc6RbOw/viewform"
            }
        ]
    },
];

const cursoNome = [
    { nome_curso: "Curso de HTML e CSS" }
];

const elementos = document.querySelector(".elementos");
const container = document.querySelector(".conteudo");
const headerNome = document.querySelector(".links_header_curso");

const verCaixas = () => {
    elementos.innerHTML = caixas.map((e, index) => `
        <div class="caixa_elemento">
            <div class="caixa_cor"></div>
            <button class="caixa_elemento" data-index="${index}">
                ${e.nome}
                <img src="../../img/maisIcon.png" alt="">
            </button>
        </div>
        <div class="subitems" id="subitems-${index}">
            ${e.subitens.map((sub, subIndex) => `
                <div class="caixa_elemento_sub">
                    <img src="../../img/seta.png" alt="">
                    <button class="caixa_elemento" data-index="${index}" data-subindex="${subIndex}">
                        ${sub.nome}
                    </button>
                </div>
            `).join('')}
        </div>
    `).join('');

    document.querySelectorAll(".caixa_elemento").forEach(button => {
        button.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            const subIndex = this.getAttribute("data-subindex");

            if (subIndex !== null) {
                mostrarConteudo(index, subIndex);
            } else {
                const subitems = document.getElementById(`subitems-${index}`);
                subitems.classList.toggle("active");
            }
        });
    });
};

const verNome = () => {
    headerNome.innerHTML = cursoNome.map(curso => `<h2>${curso.nome_curso}</h2>`).join('');
};

const mostrarConteudo = (index, subIndex) => {
    const item = caixas[index].subitens[subIndex];

    container.innerHTML = `
        <div class="conteudo">
            <div class="container_conteudo">
                <h1>${item.titulo}</h1>
                <p>${item.conteudo}</p>
                ${item.iframe ? `
                    <div class="conteudo_video">
                        <iframe src="${item.iframe}" frameborder="0" width="100%" height="600px" allowfullscreen></iframe>
                    </div>
                ` : ''}
                ${item.dowload ? `
                    <a href="${item.dowload}" download class="botao_download">Baixar Apostila</a>
                ` : ''}
            </div>
        </div>
    `;
};


// Inicializa a interface
window.addEventListener("load", () => {
    verCaixas();
    verNome();
});

// Overlay Compartilhamento
const overlay = document.getElementById("caixa_branca");
const shareButton = document.querySelector(".header_compartilhe");
const linkInput = document.getElementById("linkInput");
const closeButton = document.getElementById("closeButton");

shareButton.addEventListener("click", () => {
    linkInput.value = window.location.href;
    overlay.style.display = "flex";
});

closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
});

// Alternar tópicos laterais
const toggleButton = document.getElementById("toggleTopicos");
const topicosDiv = document.querySelector(".topicos");
const toggleIcon = document.getElementById("toggleIcon");

toggleButton.addEventListener("click", () => {
    topicosDiv.classList.toggle("minimized");
    toggleIcon.src = topicosDiv.classList.contains("minimized") ? "../../img/maisIcon.png" : "../../img/menosIcon.png";
});
