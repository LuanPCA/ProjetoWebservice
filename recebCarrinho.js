const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

let carrinho = [];

app.post('/adicionar-ao-carrinho', async (req, res) => {
    const { produtoId, nome, empresa, preco, quantidade } = req.body;

    const produtoNoCarrinho = carrinho.find(item => item.produtoId === produtoId);

    if (produtoNoCarrinho) {
        res.status(400).json({ mensagem: 'Você já tem esse jogo no carrinho' });
    } else {
        carrinho.push({ produtoId, nome, empresa, preco, quantidade });
        
        res.status(200).json({ mensagem: 'Produto adicionado ao carrinho com sucesso!' });
    }
});

app.post('/remover-do-carrinho', async (req, res) => {
    const { produtoId, nome } = req.body;

    carrinho = carrinho.filter(item => item.produtoId !== produtoId);
    
    res.status(200).json({ mensagem: 'Produto removido do carrinho com sucesso!' });
});

app.get('/carrinho', (req, res) => {
    res.status(200).json(carrinho);
});

app.listen(port, () => {
    console.log(`Servidor do Carrinho está rodando em http://localhost:${port}`);
});
