let qntCartas = prompt("quantas cartas?");

let contador = 0;


while(contador<qntCartas){
let carta;
carta = `<div class="carta" data-identifier="card"> 
    
<div class="verso" data-identifier="back-face"></div> 

<div class="frente hidden" data-identifier="front-face"></div>`

adicionarCarta(carta);

contador = contador +1

}



function adicionarCarta(carta) {
    const elemento = document.querySelector("ul");
    elemento.innerHTML = elemento.innerHTML + `<li>${carta}</li>`;
  }