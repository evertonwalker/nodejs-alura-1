const express = require('express');
const app = express();
require('marko/node-require').install();
require('marko/express');

const rotas = require('../app/rotas');
/*
Como as rotas exportam uma função com parâmetro para receber o app e utilizar suas funções de roteamento.
*/
rotas(app);

module.exports = app;