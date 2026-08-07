let mario = document.querySelector(".mario");
let obstaculo = document.querySelector(".obstaculo");
let reiniciar_jogo = document.querySelector(".reiniciar_jogo");
let pontuacao = document.querySelector(".pontuacao");

let loop;
let totalMoeadas = 0;
pontuacao.innerHTML = totalMoeadas;


function jump() {
  mario.classList.add("jump");
pontuacao.innerHTML = "";
    totalMoeadas += 1;
    pontuacao.innerHTML = totalMoeadas;
    console.log(pontuacao);
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
}

function game() {
  loop = setInterval(() => {
    if (marioEnconstou() && marioNaoPulou()) {
      GameOver();
    }
  }, 10);
}

function marioEnconstou() {
  const leftObstaculo = window.getComputedStyle(obstaculo).left;
  const valorConvertidoParaNumero = parseInt(leftObstaculo);

  if (valorConvertidoParaNumero >= 500 && valorConvertidoParaNumero <= 510) {
    return true;
  }
}

function marioNaoPulou() {
  const bottomMario = window.getComputedStyle(mario).bottom.replace("px", "");
  const valorConvertidoParaNumero = parseInt(bottomMario);

  if (valorConvertidoParaNumero < 70) {
    return true;
  }
}

function ReiniciarJogo() {
  reiniciar_jogo.innerHTML = "";
  mario.classList.remove("gameOver");
  obstaculo.classList.remove("gameOver");
  game();
}

function GameOver() {
  clearInterval(loop);
  obstaculo.classList.add("gameOver");
  mario.classList.add("gameOver");
  pontuacao.innerHTML = "";
  totalMoeadas = 0;
  const div = document.createElement("div");
  div.classList.add("reiniciar");

  div.innerHTML = `
   
    <h2> Game over! </h2>
    <button onclick = "ReiniciarJogo()"> Jogar novamente </button>
   
   `;
  reiniciar_jogo.appendChild(div);
}


document.addEventListener("keydown", jump);
game();