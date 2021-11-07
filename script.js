let contador = 0; //para array de cartas
let contador2 = 0; //para lista de cartas
let qntCartas = "";
let qntCartasCorretas = null;
let qntCartasViradas = 0;
let listaCartas = document.querySelector("ul");
let arrayCartas = [];
let carta = null;
let cartaAnterior = null;
let timer = 0;
let travarClique = false;

function cronometro() {
  idInterval = setInterval(aumentarTimer, 1000);
}

function aumentarTimer() {
  timer++;
  document.querySelector(".timer").innerHTML = `Timer: ${timer}s`;
  if (qntCartasCorretas === qntCartas) {
    clearInterval(idInterval);
  }
}

do {
  qntCartas = prompt("quantas cartas?");
}
while (qntCartas % 2 !== 0 || qntCartas < 4 || qntCartas > 14);

while (contador < (qntCartas / 2)) {
  arrayCartas.push(contador + 1);
  arrayCartas.push(contador + 1);
  contador++
}

misturar();

cronometro();

while (contador2 < qntCartas) {
  let carta = `<div onclick="selecionarCarta(this)" class="carta" data-identifier="card"> 
    
<div class="verso" data-identifier="back-face"></div>
<div class="frente" data-identifier="front-face">
<img src="./assets/Pictures/parrot_0${arrayCartas[contador2]}.gif">
</div>`

  adicionarCarta(carta);
  contador2++

}

function selecionarCarta(cartaclicada) {
  if (travarClique == true) {
    return;
  }

  else if (cartaAnterior === null) {

    virarCarta(cartaclicada);
    qntCartasViradas++;
    cartaAnterior = cartaclicada;
    travarClique = false;
  }

  else if (cartaclicada === cartaAnterior) {

  }

  else {
    virarCarta(cartaclicada);
    qntCartasViradas++
    setTimeout(function () {
      checarPar(cartaclicada, cartaAnterior)
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

function virarCarta(elemento) {
  travarClique = true;
  let verso = elemento.querySelector(".verso");
  let frente = elemento.querySelector(".frente");
  verso.classList.toggle("virarverso");
  frente.classList.toggle("virarfrente");

}

function checarPar(elemento, elementoAnterior) {

  if (elementoAnterior.innerHTML === elemento.innerHTML) {

    elementoAnterior.removeAttribute("onclick");
    elemento.removeAttribute("onclick");
    cartaAnterior = null;
    qntCartasCorretas += 2;
    checarVitoria();
  }

  else {
    virarCarta(elemento);
    virarCarta(elementoAnterior);
  }
  travarClique = false;
  cartaAnterior = null;
}

function checarVitoria() {

  if (qntCartasCorretas == qntCartas) {

    alert(`Você ganhou em ${qntCartasViradas} jogadas e em ${timer} segundos!`)

    let restart = prompt("Recomeçar? (Sim/Não)")

    restart = restart.toLowerCase();

    if (restart == "sim" || restart == "s") {
      location.reload(true);
    }
    else {
      clearInterval(idInterval);
    }
  }
}