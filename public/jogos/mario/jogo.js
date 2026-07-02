
// Personagens
let mario = document.querySelector(".mario");
let obstaculo = document.querySelector(".obstaculo");
//Cenário
let cenario = document.querySelector(".cenario");
//Reiniciar jogo
let reiniciar_jogo = document.querySelector(".reiniciar_jogo");
//Pontuação
let pontuacao = document.querySelector(".pontuacao");

//Array de posicionamento 
let posicaoMoedas = [1000, 100, 100, 1000, 3000];

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


function adicionarMoedas() {

  //Gerar quantidade aleatória de moedas
  let min = 1;
  let max = 8;
  let quantidadeMoedas = Math.floor(Math.random() * (max - min + 1)) + min;

  //Gerar posicionamento aleatório das moedas
  min = 0;
  max = posicaoMoedas.length - 1;
  let posicaoMoeda = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log("Quantidade de moedas: " + quantidadeMoedas);
  console,log("Posição das moedas: " + posicaoMoedas[posicaoMoeda]);

  //Adicionar as moedas 
  const divMoedas = document.createElement("div");
  divMoedas.classList.add("divMoedas");
  for (let i = 0; i < quantidadeMoedas; i++) {
    divMoedas.innerHTML = `
        <div>
         <img class="moeda" src="./imagens/moeda.png" alt="moeda" />
        </div>
     `;
  }
  divMoedas.style.left = posicaoMoedas[posicaoMoeda] + "px";
  cenario.appendChild(divMoedas);
}

function game() {
  setTimeout(() => {
    fase01();
  }, 0);

  setTimeout(() => {
    fase02();
  }, 5000);

  setTimeout(() => {
    fase03();
  }, 10000);

}

function fase01() {

  cenario.classList.add("cenarioFase01");
  obstaculo.classList.add("obstaculoFase1");

  moedas = setInterval(() => {
    adicionarMoedas();
  }, 3000);

  loop = setInterval(() => {
    if (marioEnconstou() && marioNaoPulou()) {
      GameOver();
    }
  }, 10);

}

function fase02() {

  cenario.classList.remove("cenarioFase01");
  cenario.classList.add("cenarioFase02");

  obstaculo.classList.remove("obstaculoFase1");
  obstaculo.classList.add("obstaculoFase02");
  loop = setInterval(() => {
    if (marioEnconstou() && marioNaoPulou()) {
      GameOver();
    }
  }, 10);

}

function fase03() {

  cenario.classList.remove("cenarioFase02");
  cenario.classList.add("cenarioFase03");
  obstaculo.classList.remove("obstaculoFase2");
  obstaculo.classList.add("obstaculoFase03");
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
  //Removendo a caixinha de "gameOver"
  reiniciar_jogo.innerHTML = "";
  //Retornando a animação do Mário e do obstáculo
  mario.classList.remove("gameOver");
  obstaculo.classList.remove("gameOver");
  //Reiniciando a pontuação
  pontuacao.innerHTML = "";
  totalMoeadas = 0;
  //Reiniciando a fase 
  cenario.classList.remove("cenarioFase03");
  cenario.classList.add("cenarioFase01");

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
