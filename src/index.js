// index.js
const express = require("express");
const app = express();
const router = require("./routes/routerProducts");
//const port = process.env.PORT || 3000;

// Configuração do middleware para interpretar JSON no corpo das requisições
app.use(express.json());

//Rotas da API

app.use(router);

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`);
});
