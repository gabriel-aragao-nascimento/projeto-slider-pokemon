/*
OBJETIVO 1 - quando clicarmos na seta de avançar, temos que mostrar o proximo cartão
    {
        - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar;
        - passo 2 - dar um jeito de indentificar o clique do usuário na seta avançar;
        - passo 3 - fazer aparecer o proximo cartão da lista;
        - passo 4 - buscar o cartão que esta selecionado e esconder;
    }

OBJETIVO 2 - quando clicarmos na seta de voltar, temos que mostrar o cartão anterior
    {
        - passo 1 - dar um jeito de pegar o elemento HTML da seta anterior;
        - passo 2 - dar um jeito de indentificar o clique do usuário na seta anterior;
        - passo 3 - fazer aparecer o cartão anterior da lista;
        - passo 4 - buscar o cartão que esta selecionado e esconder;
    }
 */




/************************************* */
//     - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar;

/*console.log(document.getElementById('btn-avancar'));*/

//OU

const btnProximo = document.getElementById("btn-proximo");//pegou o elemento BOTÃO PROXIMO pelo ID e colocou na variavel constante btnProximo
const card = document.querySelectorAll(".card");

let cardAtual = 0;


//     - passo 2 - dar um jeito de indentificar o clique do usuário na seta avançar;
document.getElementById("btn-proximo").addEventListener('click', function () {

    console.log("card anterior:", cardAtual);
    //  CLAUSULA DE SEGURANÇA
    if(cardAtual === card.length - 1) {
            console.log("ultimo card");
    };
    if(cardAtual === card.length - 1) return;
    //     - passo 3 - fazer aparecer o proximo cartão da lista;
    
    
    cardAtual++;
    console.log("card atual:", cardAtual);
    card[cardAtual].classList.add("selecionado");

    //     - passo 4 - buscar o cartão que esta selecionado e esconder;
    const cardSelecionado = document.querySelector(".selecionado");
    cardSelecionado.classList.remove("selecionado");

})

/*
OBJETIVO 2 - quando clicarmos na seta de voltar, temos que mostrar o cartão anterior
    {
        - passo 1 - dar um jeito de pegar o elemento HTML da seta anterior;
        - passo 2 - dar um jeito de indentificar o clique do usuário na seta anterior;
        - passo 3 - fazer aparecer o cartão anterior da lista;
        - passo 4 - buscar o cartão que esta selecionado e esconder;
    }
 */

const btnAnterior = document.getElementById("btn-anterior");

btnAnterior.addEventListener("click", function () {

    console.log("card anterior:", cardAtual);
    if(cardAtual === 0){
        console.log("ultimo card")
    };
    if(cardAtual === 0) return;

    const cardSelecionado = document.querySelector(".selecionado");
    cardSelecionado.classList.remove("selecionado");
    
    

    cardAtual--;
    console.log("card atual:", cardAtual);
    card[cardAtual].classList.add("selecionado");
    


});