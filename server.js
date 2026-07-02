const express = require('express'); // Importa o Express
const app = express(); // Cria uma aplicação Express
app.use(express.json()); // Permite trabalhar com dados JSON


// Inicia o servidor na porta 3000
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

//Serve arquivos estáticos
app.use(express.static('public'));

const path = require('path'); // Importa o módulo 'path' do Node.js
//Posso tanto utilizar o path quanto o dirname 
app.get('/listarJogos', (req, res) => {
  // Entra em 'public', depois em 'html', depois pega o arquivo
  res.sendFile(path.join(__dirname, 'public', 'html', 'lista.html'));
});

app.get('/cadastrarJogos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'cadastro.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'home.html'));
});

app.get('/mario', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'mario.html'));
});


