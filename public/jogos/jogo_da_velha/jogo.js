/* 🎯 Passo 01: Criar variáveis */
let vez_jogador = 0;
const tabuleiro = new Array();
/* 0 -> jogador O / 1 -> jogador X */
const posicoes_ganhadoras = [
  //Diagonais
  [0, 4, 8],
  [2, 4, 6],
  //Linhas
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //Colunas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

/* 🎯 Passo 07: Saber quando o jogo finalizou*/
//Dica: esses elementos precisam exitir no seu HTML!
const jogo_acabou = document.querySelector(".jogo_acabou");
const section_jogo = document.querySelector(".section_jogo");

/* 🎯 Passo 02: Saber qual elemento deve ser adicionado no jogo */

//Saber qual elemento deve adicionar
function Jogador() {
  if (vez_jogador == 0) {
    return "X";
  }
  return "O";
}

//Trocar a vez do jogador
function TrocarJogador() {
  if (vez_jogador == 0) {
    vez_jogador = 1;
  } else {
    vez_jogador = 0;
  }
}

//Adicionar o elemento no HTML (bem nas divs vazias!)
function AdicionaElemento(elemento_html) {
  if (vez_jogador == 0) {
    elemento_html.innerHTML = "X";
  } else {
    elemento_html.innerHTML = "O";
  }
}

/* 🎯 Passo 03: Pegar as posições de cada quadradinho do HTML*/

tabuleiro.push(document.querySelector(".posicao_00"));
tabuleiro.push(document.querySelector(".posicao_01"));
tabuleiro.push(document.querySelector(".posicao_02"));
tabuleiro.push(document.querySelector(".posicao_03"));
tabuleiro.push(document.querySelector(".posicao_04"));
tabuleiro.push(document.querySelector(".posicao_05"));
tabuleiro.push(document.querySelector(".posicao_06"));
tabuleiro.push(document.querySelector(".posicao_07"));
tabuleiro.push(document.querySelector(".posicao_08"));

/* 🎯 Passo 04: Saber quando o usuário clicou na posição */
function ClicouPosicao(posicao) {
  let posicao_tabuleiro = tabuleiro[posicao];
  let jogador_atual = Jogador();

  if (posicao_tabuleiro.innerHTML == "") {
    AdicionaElemento(posicao_tabuleiro);

    if (VerificaFinalJogo(jogador_atual)) {
      FinalizarJogo(`O jogador ${jogador_atual} venceu!`);
    } else if (VerificaEmpate()) {
      FinalizarJogo("Empate");
    }
  }

  TrocarJogador();
}

/* 🎯 Passo 05: Saber se alguém ganhou */

//Percorre o array de "posições_ganhadoras"
function VerificaFinalJogo(jogador_atual) {
  for (let i = 0; i < posicoes_ganhadoras.length; i++) {
    if (VerificaArray(posicoes_ganhadoras[i], jogador_atual)) {
      return true;
    }
  }
}

//Dentro do array de "posicoes_ganhadores", vai verificar o array que está na posição 0, 1, 2 e assim por diante...
function VerificaArray(array, jogador_atual) {
  for (let i = 0; i < array.length; i++) {
    if (
      tabuleiro[array[i]].innerHTML != jogador_atual ||
      tabuleiro[array[i]].innerHTML == ""
    ) {
      return false;
    }
  }

  return true;
}

/* 🎯 Passo 06: Saber se teve empate */

function VerificaEmpate() {
  let tem_empate = true;
  for (let contadora = 0; contadora < tabuleiro.length; contadora++) {
    if (tabuleiro[contadora].textContent == "") {
      return false;
    }
  }
  return tem_empate;
}

/* 🎯 Passo 08: Finalizar o jogo */

function FinalizarJogo(resultado) {
  section_jogo.style.display = "none";
  let div = document.createElement("div");
  div.classList.add("div_jogo_acabou");
  div.innerHTML = `
    <h2> ${resultado} </h2>
    <p> Deseja reiniciar o jogo? </p>
    <button onclick = "ReiniciarJogo()"> Reiniciar jogo </button>
  `;
  jogo_acabou.appendChild(div);
}

function ReiniciarJogo() {
  jogo_acabou.innerHTML = "";
  section_jogo.style.display = "grid";
  for (let i = 0; i < tabuleiro.length; i++) {
    tabuleiro[i].innerHTML = "";
  }
}
