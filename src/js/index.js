const btnAnterior = document.getElementById("btn-anterior");
const btnProximo = document.getElementById("btn-proximo");
const card = document.querySelectorAll(".card");

let cardAtual = 0;

function esconderCardSelecionado(){
    const cardSelecionado = document.querySelector(".selecionado");
    cardSelecionado.classList.remove("selecionado");
}

function mostrarCard(indicecard){
    console.log("card atual:", cardAtual);
    card[indicecard].classList.add("selecionado");
}

btnProximo.addEventListener('click', function () {
    //  CLAUSULA DE SEGURANÇA
    if(cardAtual === card.length - 1) {
            console.log("ultimo card");return;
    };
    esconderCardSelecionado();
    cardAtual++;
    mostrarCard(cardAtual);
})

btnAnterior.addEventListener("click", function () {
    if(cardAtual === 0){
        console.log("ultimo card");return;
    };
    esconderCardSelecionado();
    cardAtual--;
    mostrarCard(cardAtual);
});