// Importar os módulos necessários
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDn4IoMfe7U97yVnHvMlP7xDmDzxFDpUlg",
    authDomain: "vcensinos.firebaseapp.com",
    projectId: "vcensinos",
    storageBucket: "vcensinos.firebasestorage.app",
    messagingSenderId: "1083943850886",
    appId: "1:1083943850886:web:a56dd998f5652924695207"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Verificar o estado de autenticação do usuário
let usuarioLogado = null;

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Usuário logado:", user.email);
        usuarioLogado = user; // Armazenar o usuário logado
    } else {
        usuarioLogado = null; // Nenhum usuário logado
    }
});



// Função de logout
const logoutButton = document.getElementById("logout-btn");
if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        signOut(auth)
            .then(() => {
                console.log("Usuário deslogado");
                window.location.href = "../pages/login.html";
            })
            .catch((error) => {
                console.error("Erro ao deslogar:", error.message);
            });
    });
}

// Definir as disciplinas
const disciplinas = [
    {
        titulo: "Banco de dados 1",
        descricao: "Aprenda a utilizar um banco de dados, com todas as suas funções e lógicas!",
        link: "../Pagina_disciplina/Banco_modulo1/banco1.html",
        image: "../img/emblemas_cards/banco.png",
        dificuldade: "Fácil",
        categoria: "back-end",
        duracao: "4h"
    },
    {
        titulo: "Banco de dados 2",
        descricao: "Voce aprendera",
        link: "../Pagina_disciplina/Banco_modulo2/banco2.html",
        image: "../img/emblemas_cards/banco.png",
        dificuldade: "Médio",
        categoria: "back-end",
        duracao: "2h"
    },
    {
        titulo: "Banco de dados 3",
        descricao: "Aprenda a utilizar um banco de dados, com todas as suas funções e lógicas!",
        link: "../Pagina_disciplina/Banco_modulo3/banco3.html",
        image: "../img/emblemas_cards/banco.png",
        dificuldade: "Dificil",
        categoria: "back-end",
        duracao: "6h"
    },
    {
        titulo: "Curso de Illustrator",
        descricao: "Aprenda a utilizar o Illustrator de uma forma incrível!",
        link: "../Pagina_disciplina/illustrator/illustrator.html",
        image: "../img/emblemas_cards/illustrator.png",
        dificuldade: "Médio",
        categoria: "front-end",
        duracao: "3h"
    },
    {
        titulo: "Curso de Photoshop",
        descricao: "Aqui aprendera a usar o Photoshop",
        link: "../Pagina_disciplina/photoshop/photoshop.html",
        image: "../img/emblemas_cards/Photo.png",
        dificuldade: "Difícil",
        categoria: "front-end",
        duracao: "5h"
    },
    {
        titulo: "Curso de Java 1",
        descricao: "nada",
        link: "../Pagina_disciplina/java_modulo1/java1.html",
        image: "../img/emblemas_cards/Java.png",
        dificuldade: "Fácil",
        categoria: "back-end",
        duracao: "2h"
    },
    {
        titulo: "Curso de Java 2",
        descricao: "nada",
        link: "../Pagina_disciplina/java_modulo2/java2.html",
        image: "../img/emblemas_cards/Java.png",
        dificuldade: "Médio",
        categoria: "back-end",
        duracao: "3h"
    },
    {
        titulo: "Curso de Java 3",
        descricao: "nada",
        link: "../Pagina_disciplina/java_modulo3/java3.html",
        image: "../img/emblemas_cards/Java.png",
        dificuldade: "Díficil",
        categoria: "back-end",
        duracao: "4h"
    },
    
];

const cardContainer = document.querySelector(".cards");

// Função para exibir as disciplinas
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
                <div class="item_dificuldade">
                    <div class="dificuldade_card">
                        <img src="../img/difficult.png" alt="">
                        <h2>${e.dificuldade}</h2>
                    </div>
                    <div class="dificuldade_card">
                        <img src="../img/categoria.png" alt="">
                        <h2>${e.categoria}</h2>
                    </div>
                </div>

            </div>
            <div class="descricao">
                <div class="foto_card">
                    <img src="${e.image}" alt="">
                </div>
                <h2>${e.titulo}</h2>
                <p>${e.descricao}</p>
                <div class="links-hover">
                    <a href="#" class="btn-ver-mais" data-curso="${e.titulo}">Veja mais</a>
                </div>
            </div>
        </div>
        `;
    });

    // Adicionar evento de clique no botão "Veja mais"
    const verMaisBtns = document.querySelectorAll(".btn-ver-mais");

    verMaisBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); // Impede a navegação padrão

            if (usuarioLogado) {
                const cursoId = e.target.getAttribute("data-curso");
                console.log(`Acessando o curso de ${cursoId}`);

                // Redirecionar para a página do curso
                const curso = disciplinas.find(d => d.titulo === cursoId);
                if (curso) {
                    window.location.href = curso.link; // Redireciona para o link do curso
                }
            } else {
                // Se não estiver logado, redireciona para a página de login
                window.location.href = "../pages/login.html";
            }
        });
    });
};

// Exibir as disciplinas
verDisciplinas(disciplinas);

// Filtragem por categoria
const filtroCategorias = document.querySelector(".filtro_categorias");
filtroCategorias.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const categoriaAtual = e.target.dataset.categoria;
        const disciplinasFiltradas = categoriaAtual === "todas" ?
            disciplinas :
            disciplinas.filter(disciplina => disciplina.categoria === categoriaAtual);
        verDisciplinas(disciplinasFiltradas);
    }
});

// Barra de pesquisa
const pesquisarInput = document.querySelector("#pesquisarInput");
pesquisarInput.addEventListener("keyup", () => {
    const termoBusca = pesquisarInput.value.toLowerCase();
    const disciplinasFiltradas = disciplinas.filter(disciplina => {
        return disciplina.titulo.toLowerCase().includes(termoBusca);
    });
    verDisciplinas(disciplinasFiltradas);
});




