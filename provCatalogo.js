const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const catalogoProdutos = [
    { id: 1, nome: "Assassins Creed Mirage", preco: 250, empresa: "Ubisoft" },
    { id: 2, nome: "Spider Man 2", preco: 300, empresa: "Insomniac" },
    { id: 3, nome: "God Of War", preco: 200, empresa: "Santa Monica" },
];

app.get('/produtos', (req, res) => {
    res.status(200).json(catalogoProdutos);
});

app.listen(port, () => {
    console.log(`Servidor do Catálogo está rodando em http://localhost:${port}`);
});
