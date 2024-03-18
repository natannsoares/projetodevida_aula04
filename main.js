// Seleciona todos os elementos com a classe ".botao"
const botoes = document.querySelectorAll(".botao");

// Loop para cada botão
for (let i = 0; i < botoes.length; i++) {
    // Quando um botão é clicado, executa esta função
    botoes[i].onclick = function () {
        // Remove a classe "ativo" de todos os botões
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
        }
        // Adiciona a classe "ativo" apenas ao botão clicado
        botoes[i].classList.add("ativo");
    }
}