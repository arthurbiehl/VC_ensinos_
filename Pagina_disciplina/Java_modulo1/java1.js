const caixas = [
    {
        nome: "Introdução",
        subitens: [
            { nome: "Como funciona?", titulo: "...", conteudo: "..." },
            { nome: "o que é?", titulo: "...", conteudo: "..." }
        ]
    },
    { 
        nome: "Video",
        subitens: [
            { nome: "Conceitos Básicos", titulo: "Conteudo em video", conteudo:"Video explicativo", iframe: "https://www.youtube.com/embed/q3VlhfsrRjc?si=cNzIOZU4_Hvmt85y"}
        ]
    },
    {
        nome: "Apostila",
        subitens: [
            { nome: "Apostila completa", titulo: "", conteudo: "...", dowload: ""},
        ]
    },
    {
        nome: "Desafio",
        subitens: [
            { nome: "Desadio final do modulo", titulo: "", conteudo: "..." },
        ]
    },
];

const cursoNome = [

    {
        nome_curso: "java 1",
    }


];

const elementos = document.querySelector(".elementos");
const container = document.querySelector(".conteudo");
const headerNome = document.querySelector(".links_header_curso")

const verCaixas = () => {
    elementos.innerHTML = "";
    caixas.forEach((e, index) => {
        elementos.innerHTML += 
        `
        <div class="caixa_elemento">
            <div class="caixa_cor"></div>
            <button class="caixa_elemento" data-index="${index}">
                ${e.nome}
                <img src="../../img/maisIcon.png" alt="">


            </button>
        </div>
        <div class="subitems" id="subitems-${index}">
            ${e.subitens.map((sub, subIndex) => 
                `
                <div class="caixa_elemento_sub">
                    <img src="../../img/seta.png" alt="">
                    <button class="caixa_elemento" 
                        data-index="${index}" 
                        data-subindex="${subIndex}">
                        ${sub.nome}
                    </button>
                </div>
                `).join('')}
        </div>
        `;
    });

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


const verNome = () =>{
    headerNome.innerHTML = "";
    cursoNome.forEach((a) => {
        headerNome.innerHTML += 
        `
        <h2> ${a.nome_curso}</h2>
        `
        
    })
}

verNome()

const mostrarConteudo = (index, subIndex) => {
    const item = caixas[index].subitens[subIndex];

    if (!item.iframe) {
        container.innerHTML = `
        <div class="conteudo">
            <div class="container_conteudo">
                <h1>${item.titulo}</h1>
                <p>${item.conteudo}</p>
                <a href="${item.dowload}" download>
            </div>

        </div>
        `;
    } else {
        container.innerHTML = `
        <div class="conteudo">
            <div class="container_conteudo">
                <h1>${item.titulo}</h1>
                <p>${item.conteudo}</p>
                <div class="conteudo_video">
                    <iframe src="${item.iframe}" frameborder="0"></iframe>
                </div>
            </div>
        </div>
        `;
    }
};

// Inicializa a interface
window.addEventListener("load", verCaixas);


// quadrado branco

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


