let contador = 0; //para array de cartas
let contador2 = 0; //para lista de cartas
let qntCartas = "";
let qntCartasCorretas = 0
let qntCartasViradas = 0
let listaCartas = document.querySelector("ul");
let arrayCartas = [];
const container = document.querySelector(".container");
let carta = null;
let cartaAnterior = null;

qntCartas = prompt("quantas cartas?");

//continuar perguntando numero de cartas até obter resposta valida


while (qntCartas % 2 !== 0 || qntCartas < 4 || qntCartas > 14) {
  qntCartas = prompt("quantas cartas?");

}




//criar array para identificação de cartas de n(minimo2) até m(maximo14)
while (contador < (qntCartas / 2)) {


  arrayCartas.push(contador + 1);
  arrayCartas.push(contador + 1);

  contador++

}

//Mistura Array
misturar();


//Adiciona cartas ao tabuleiro

while (contador2 < qntCartas) {
  let carta;
  carta = `<div onclick="selecionarCarta(this)" class="carta" data-identifier="card"> 
    
<div class="verso" data-identifier="back-face">
</div>

<div class="frente" data-identifier="front-face">
<img src="./assets/Pictures/parrot_0${arrayCartas[contador2]}.gif">
</div>`

  adicionarCarta(carta);
  contador2++

}

//carta selecionada pelo usuario

function selecionarCarta(cartaclicada) {

  carta = cartaclicada;

  if (cartaAnterior === null) {

    virarcarta(cartaclicada);
    cartaclicada.classList.add("selecionada");
    qntCartasViradas++;
    cartaAnterior = cartaclicada;
  }

  else if (cartaclicada === cartaAnterior) {

  }

  else {
    virarcarta(cartaclicada);
    cartaclicada.classList.add("selecionada");
    qntCartasViradas++
    setTimeout(function () {
      acertouCarta(cartaclicada, cartaAnterior)
    }, 1000);
  }


}

function misturar() {
  arrayCartas.sort(embaralhador);
}


function embaralhador() {
  return Math.random() - 0.5;
}


function adicionarCarta(carta) {
  listaCartas.innerHTML += `<li>${carta}</li>`;
}

function virarcarta(elemento) {
  let verso = elemento.querySelector(".verso")
  let frente = elemento.querySelector(".frente")
  verso.classList.toggle("virarverso")
  frente.classList.toggle("virarfrente")
}

function acertouCarta(elemento, elementoAnterior) {

  if (elementoAnterior.innerHTML === elemento.innerHTML) {

    elementoAnterior.removeAttribute("onclick");
    elemento.removeAttribute("onclick");
    console.log(elementoAnterior)
    console.log(elemento)
    cartaAnterior = null;
    carta = null;
    qntCartasCorretas += 2;
    checarVitoria();


  }

  else {
    virarcarta(elemento);
    virarcarta(elementoAnterior);
  }

  elemento.classList.remove("selecionada");
  elementoAnterior.classList.remove("selecionada");
  cartaAnterior = null;

}

function checarVitoria() {

  if (qntCartasCorretas == qntCartas) {

    alert(`Você ganhou em ${qntCartasViradas} jogadas`)
  }

}
