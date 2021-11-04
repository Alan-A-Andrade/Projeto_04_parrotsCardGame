let contador = 0;
let contador2 = 0;
let qntCartas = "";
let listaCartas = document.querySelector("ul");
let arrayCartas = [];
const container = document.querySelector(".container")

qntCartas = prompt("quantas cartas?");

//continuar perguntando numero de cartas até obter resposta valida


while(qntCartas % 2 !== 0 || qntCartas < 4 || qntCartas > 14){
  qntCartas = prompt("quantas cartas?");

  }




//criar array para identificação de cartas de n(minimo2) até m(maximo14)
while(contador< ( qntCartas / 2) ) {

 
arrayCartas.push(contador+1);
arrayCartas.push(contador+1);

contador = contador +1
 
}

//Mistura Array
misturar();




//adicionar cartas como lista
while(qntCartas % 2 !== 0 || qntCartas < 4 || qntCartas > 14){
qntCartas = prompt("quantas cartas?");
}

while(contador2<qntCartas){
let carta;
carta = `<div class="carta" data-identifier="card"> 
    
<div class="verso" data-identifier="back-face"></div>

<h1>${arrayCartas[contador2]}</h1>

<div class="frente hidden" data-identifier="front-face"></div>`

adicionarCarta(carta);
contador2 = contador2 +1

}

function misturar() {
arrayCartas.sort(comparador);
}

// Após esta linha, a minhaArray estará embaralhada


function comparador() { 
	return Math.random() - 0.5; 
}


function adicionarCarta(carta) {
    listaCartas.innerHTML = listaCartas.innerHTML + `<li>${carta}</li>`;
}