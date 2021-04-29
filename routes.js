// trazendo nosso express para usar um funcao dele Router()
const express = require('express');

//vamos usar a funcao Router de dentro de exprees
const routes = express.Router();

//trazendo nosso controller
const homeControle = require('./src/controllers/homeController');
const contatoControler = require('./src/controllers/contatoController');
//para podemos trabalhar com requisicao quem vem no body 
routes.use(express.urlencoded({extended:true}))


//ROTAS http://localhost:300/user <-GET -> ENTREGAR USUARIOS



//ROTAS HOME
routes.get('/',homeControle.paginaInicial);
routes.post('/',homeControle.recebePost);


//ROTAS CONTATO
routes.get('/contato',contatoControler.paginaInicial)

module.exports = routes

