const nome = document.getElementById("nome");
const link = document.getElementById("link");
const descricao = document.getElementById("descricao");
let genero = document.getElementById("genero");
let estilo = document.querySelector(".estilo");
let lista_de_jogos = document.querySelector(".lista_de_jogos");
let video = document.querySelector("#video");
let input_com_video = document.getElementById("input_com_video");
const texto_pesquisa = document.querySelector("#texto_pesquisa");
const limpar_filtro = document.querySelector("#limpar_filtro");

let jogos = [];

let lista_de_estilos = ["3D", "2D", "Jogo de luta"];

texto_pesquisa.addEventListener("input", function () {
  ListaComFiltro();
});

limpar_filtro.addEventListener("click", function () {
  ListaSemFiltro();
  texto_pesquisa.value = "";
});

function PegarURLVideo() {
  if (input_com_video.files.length === 0) {
    return "";
  }
  return URL.createObjectURL(input_com_video.files[0]);
}

function CadastrarJogo() {
  const urlVideo = PegarURLVideo();
  const novoJogo = Jogo(nome.value, link.value, urlVideo, descricao.value, estilo.value);

  if (VerificarCampos(novoJogo)) {
    jogos.push(novoJogo);
    ListaSemFiltro();
  } else {
    alert("Preencha todos os campos obrigatórios!");
  }
}

function VerificarCampos(novoJogo) {
  if (novoJogo.nome != "" && novoJogo.estilo != "" && novoJogo.link != "" && novoJogo.descricao != "") {
    return true;
  }
  return false;
}

function RemoverElemento(indice) {
  jogos.splice(indice, 1);
  lista_de_jogos.innerHTML = "";
  ListaSemFiltro();
}

function ListaSemFiltro() {
  lista_de_jogos.innerHTML = "";
  for (let i = 0; i < jogos.length; i++) {
    const div = document.createElement("div");
    div.classList.add("card_jogo");
    div.innerHTML = `
        <video src="${jogos[i].video}" controls autoplay></video>
        <h2>${jogos[i].nome}</h2>
        <div>
        <p>${jogos[i].estilo}</p>
        <p>${jogos[i].descricao}</p>  
       <a href="${jogos[i].link}" target="_blank">Acessar Jogo</a>
        <button onclick="RemoverElemento(${i})"> Remover elemento </button>
        
         `;
    lista_de_jogos.appendChild(div);
  }
}

function ListaComFiltro() {
  lista_de_jogos.innerHTML = "";
  for (let i = 0; i < jogos.length; i++) {
    if (jogos[i].nome === texto_pesquisa.value) {
      const div = document.createElement("div");
      div.classList.add("card_jogo");
      div.innerHTML = `
        <video src="${jogos[i].video}" controls autoplay></video>
        <h2>${jogos[i].nome}</h2>
        <div>
        <p>${jogos[i].estilo}</p>
        <p>${jogos[i].descricao}</p>  
       <a href="${jogos[i].link}" target="_blank">Acessar Jogo</a>
        <button onclick="RemoverElemento(${i})"> Remover elemento </button>
         `;
      lista_de_jogos.appendChild(div);
    }
  }
}

function PreencherEstilos() {
  for (let i = 0; i < lista_de_estilos.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
      <option class = "option"> ${lista_de_estilos[i]} </option> 
      `;
    estilo.appendChild(div);
  }
}

const Jogo = (nome, link, video, descricao, estilo) => ({
  nome,
  link,
  video,
  descricao,
  estilo,
});

PreencherEstilos();