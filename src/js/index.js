/*
    OBJETIVO: quando clicarmos na aba temos que mostrar 
    o conteúdo da aba que foi clicada pelo usuário e es-
    conder o conteúdo da aba anterior

    - passo 1 -

*/

// passo 1 - 
const abas = document.querySelectorAll(".aba");


abas.forEach(aba => {
    // passo 2 -
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)

        mostrarinformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    // passo 3 -
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    // passo 4 -
    aba.classList.add("selecionado");
}

function mostrarinformacoesDaAba(aba) {
    // passo 5 -
    const  informacaoselecionada = document.querySelector(".informacao.selecionado");
    informacaoselecionada.classList.remove("selecionado");

    // passo 6 -
    const idDoElementoDeInformacoesDaAba = "informacao-" + aba.id 

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")

}