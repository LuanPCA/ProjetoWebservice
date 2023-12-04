const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3004;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

let historico = [];

app.post('/registrar-acao', (req, res) => {
    const {acao} = req.body;

    historico.push(`${acao}`);
    res.status(200).json({ mensagem: 'Ação registrada com sucesso no histórico!' });
});

app.get('/historico', (req, res) => {
    res.status(200).json(historico);
});

app.listen(port, () => {
    console.log(`Servidor do Histórico está rodando em http://localhost:${port}`);
});
