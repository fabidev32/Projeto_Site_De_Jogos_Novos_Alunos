//Listar todos os jogos cadastrados

function ListarJogos() {
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

// Editar um jogo já existente
function EditarJogo() {
    let jogoToUpdate = jogos.find(jogo => jogo.id === 1);
    if (jogoToUpdate) {
        jogoToUpdate.estilo = "Aventura";
        console.log(`Jogo atualizado: ${jogoToUpdate.nome}, Estilo: ${jogoToUpdate.estilo}`);
    }
}

//Remover um jogo 

function RemoverJogo() {
    jogos.splice(indice, 1);
    lista_de_jogos.innerHTML = "";
}




