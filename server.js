const express = require('express'); 
const app = express(); 
app.use(express.json());


app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

app.use(express.static('public'));

const path = require('path'); 
app.get('/listarJogos', (req, res) => {
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


