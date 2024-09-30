
alert("Olá! Esta é uma mensagem de alerta.");
console.log("Mensagem exibida no console.");

const largura = window.innerWidth;
const altura = window.innerHeight;
console.log(`Dimensões da janela: Largura = ${largura}, Altura = ${altura}`);

localStorage.setItem("meuValor", "Olá, Local Storage!");
const valorRecuperado = localStorage.getItem("meuValor");
console.log(`Valor recuperado do Local Storage: ${valorRecuperado}`);

const meuDiv = document.getElementById("meuDiv");
meuDiv.innerText = "Texto dentro de meuDiv";
meuDiv.style.color = "blue";
meuDiv.style.fontSize = "20px";

const meuParagrafo = document.getElementById("meuParagrafo");
meuParagrafo.innerText = "Este parágrafo foi alterado.";
meuParagrafo.style.backgroundColor = "yellow";

const minhaImagem = document.getElementById("minhaImagem");
minhaImagem.setAttribute("title", "Imagem dinâmica");

const botaoAlterar = document.getElementById("botaoAlterar");
botaoAlterar.addEventListener("click", function() {
    meuDiv.innerText = "Conteúdo do Div alterado!";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("A tecla Enter foi pressionada!");
    }
});

const minhaLista = document.getElementById("minhaLista");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const novoItemInput = document.getElementById("novoItem");

botaoAdicionar.addEventListener("click", function() {
    const novoItemTexto = novoItemInput.value;
    if (novoItemTexto) {
        const novoLi = document.createElement("li");
        novoLi.innerText = novoItemTexto;

        const botaoRemover = document.createElement("button");
        botaoRemover.innerText = "Remover";
        botaoRemover.addEventListener("click", function() {
            minhaLista.removeChild(novoLi);
        });

        novoLi.appendChild(botaoRemover);
        minhaLista.appendChild(novoLi);
        novoItemInput.value = ""; 
    } else {
        alert("Por favor, insira um item.");
    }
});