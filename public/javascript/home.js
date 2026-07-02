let lista_de_generos = JSON.parse(localStorage.getItem("estilos")) || [];
let genero = document.querySelector(".estilo");

const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");
const div_trilho = document.querySelector(".carrossel_trilho");
let indice = 0;
let total_imagens = div_trilho.children.length;

function AtualizarCarrossel() {
  // Calculamos o deslocamento (ex: indice 1 = -100%, indice 2 = -200%)
  const deslocamento = indice * 100;

  // Aplicamos a transformação no estilo do contêiner
  div_trilho.style.transform = `translateX(-${deslocamento}%)`;
}

function Anterior() {
  indice = indice === 0 ? 0 : indice - 1;
  AtualizarCarrossel(); // Chama a função para mover o trilho
}

function Proximo() {
  // Usamos total_imagens para saber o limite
  indice = indice === total_imagens - 1 ? indice : indice + 1;
  AtualizarCarrossel(); // Chama a função para mover o trilho
}

function MostrarGeneros() {
  for (let i = 0; i < lista_de_generos.length; i++) {
    const div = document.createElement("div");
    console.log(lista_de_generos[i]);
    div.innerHTML = `
      <p class = "estilo_jogo"> ${lista_de_generos[i]} </p> 
      `;
    genero.appendChild(div);
  }
}

MostrarGeneros();

//Lógica para clicar e levar até a seção

function BotaoBemVindo() {
  div_trilho.scrollIntoView();
}
