let tamanho_cobrinha = 1;
//Sempre que eu reiniciar o jogo preciso retornar para esse valor
let comida;
let bomba01 = document.querySelector(".bomba01");
let fruta01 = document.querySelector(".fruta01");
let cobrinha = document.querySelector(".cobrinha");

/*

Começo adicionando os meus obstáculos e o que vai dá mais vida pra minha cobrinha
Depois, trabalhamos com a lógica para ela funcionar

1. Primeira coisa é a lógica para ela aumentar de tamanho
Dessa forma, eu vou adicionar mais divs

*/

function VerificarPosicao() {}

// Crescer cobrinha
function crescerCobrinha() {
  let div = document.createElement("div");
  div.innerHTML = `
      <div class = "novaDiv"> </div>
    `;
  cobrinha.appendChild(div);
}

//Lógica para verificar se encostou no obstáculo

cobrinhaEncostouElemento = setInterval(() => {
  //Posição cobrinha
  const leftCobrinha = window.getComputedStyle(cobrinha).left.replace("px", "");
  const topCobrinha = window.getComputedStyle(cobrinha).top.replace("px", "");

  //Posição bomba
  const leftBomba01 = window.getComputedStyle(bomba01).left.replace("px", "");
  const topBomba01 = window.getComputedStyle(bomba01).top.replace("px", "");

  //Posição fruta
  const leftFruta01 = window.getComputedStyle(fruta01).left.replace("px", "");
  const topFruta01 = window.getComputedStyle(fruta01).top.replace("px", "");

  if (
    Math.abs(leftBomba01 - leftCobrinha) < 40 &&
    Math.abs(topBomba01 - topCobrinha) < 40
  ) {
    console.log("Perdeu!");
  } else if (
    Math.abs(leftCobrinha - leftFruta01) < 80 &&
    Math.abs(topFruta01 - topCobrinha) < 80
  ) {
    console.log("Mais uma vida!");
    crescerCobrinha(); // Exemplo de uso da sua função!

    //   if (leftCobrinha == leftBomba01 && topCobrinha == topCobrinha) {
    //     console.log("Perdeu!");
    //   } else if (leftCobrinha == leftFruta01 && topCobrinha == topFruta01) {
    //     console.log("Mais uma vida!");
    //   }
  }
}, 10);

//Lógica para perder vida

//Lógica para ganhar vida

//Lógica para finalizar jogo

//Lógica para reiniciar jogo

function mover(direcao, valor) {
  let posicao = parseInt(window.getComputedStyle(cobrinha)[direcao]);
  let nova_posicao = (posicao += valor);
  cobrinha.style[direcao] = nova_posicao + "px";
  cobrinha.classList.add("animation");
  setTimeout(() => {
    cobrinha.classList.remove("animation");
  }, 100);
}

function MoverCobrinha() {
  const key = event.key;
  switch (event.key) {
    case "ArrowLeft":
      mover("left", -10);
      break;
    case "ArrowRight":
      mover("left", 10);
      break;
    case "ArrowUp":
      mover("top", -10);
      break;
    case "ArrowDown":
      mover("top", 10);
      break;
  }
}

document.addEventListener("keydown", MoverCobrinha);
