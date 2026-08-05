
// Personagens
let mario = document.querySelector(".mario");
let obstaculo = document.querySelector(".obstaculo");
//Cenário
let cenario = document.querySelector(".cenario");
//Reiniciar jogo
let reiniciar_jogo = document.querySelector(".reiniciar_jogo");
//Moedas
let divMoedas = document.querySelector(".listaDeMoedas");

//Array de posicionamento 
let posicaoMoedas = [2, 100, 200, 300, 400, 500, 600, 700];

let loop;
let gerenciadorDeMoedas;


function jump() {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
}

// function limparFase() {
//   clearInterval(gerenciadorDeMoedas);
//   limparMoedas();

// }

function limparMoedas() {
  let moedasDaFase = document.querySelectorAll(".listaDeMoedas");
  for (let i = moedasDaFase.length - 1; i >= 0; i--) {
    moedasDaFase[i].innerHTML = "";
  }

}

function gerenciarMoedas() {

  //Gerar quantidade aleatória de moedas
  let min = 3;
  let max = 8;
  let quantidadeMoedas = Math.floor(Math.random() * (max - min + 1)) + min;

  //Adicionar as moedas 
  const moedas = document.createElement("div");
  moedas.classList.add("listaDeMoedas");
  for (let i = 0; i < quantidadeMoedas; i++) {
    moedas.innerHTML += `
        <div>
         <img class="moeda" src="./imagens/moeda.png" alt="moeda" />
        </div>
     `;
  }

  cenario.appendChild(moedas);
}

function game() {
  setTimeout(() => {
    fase01();
  }, 0);

  setTimeout(() => {
    fase02();
  }, 20000);

  setTimeout(() => {
    fase03();
  }, 30000);

}

function fase01() {

  loop = setInterval(() => {
    if (marioEnconstou() && marioNaoPulou()) {
      GameOver();
    }
  }, 10);

  gerenciarMoedas();

}

function fase02() {

  // limparFase();

  cenario.classList.remove("cenarioFase01");
  cenario.classList.add("cenarioFase02");

  obstaculo.classList.remove("obstaculoFase1");
  obstaculo.classList.add("obstaculoFase02");

  loop = setInterval(() => {
    if (marioEnconstou() && marioNaoPulou()) {
      GameOver();
    }
  }, 10);

  gerenciarMoedas();


}

function fase03() {

  // limparFase();

  cenario.classList.remove("cenarioFase02");
  cenario.classList.add("cenarioFase03");

  obstaculo.classList.remove("obstaculoFase2");
  obstaculo.classList.add("obstaculoFase03");

  loop = setInterval(() => {
    if (marioEnconstou() && marioNaoPulou()) {
      GameOver();
    }
  }, 10);

    gerenciarMoedas();

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

  //Removendo a caixinha de "gameOver"
  reiniciar_jogo.innerHTML = "";
  //Retornando a animação do Mário e do obstáculo
  mario.classList.remove("gameOver");
  obstaculo.classList.remove("gameOver");
  //Removendo a última fase que o jogador parou
  cenario.classList.remove("cenarioFase03");
  obstaculo.classList.remove("obstaculoFase03");
  //Retomando para a primeira fase 
  cenario.classList.add("cenarioFase01");
  obstaculo.classList.add("obstaculoFase1");
  // limparMoedas();
  game();

}

function GameOver() {

  clearInterval(loop);

  //Parando animações dos obstáculos
  obstaculo.classList.add("gameOver");
  obstaculo.style.left = "800px";

  //Parando animações do Mário
  mario.classList.add("gameOver");

  //Adicionando a div da pontuação no HTML
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
