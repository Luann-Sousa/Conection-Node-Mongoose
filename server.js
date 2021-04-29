require('dotenv').config();
//precisamos trazer nosso expree
const express = require('express');
const routes = require('./routes');
const path = require('path');
const mongoose = require('mongoose');
//criando uma const para guarda o link de conexao.

const meuMidlleware = require('./src/middlewares/middleware');


//fazendo a conexao com mongose e essa conexao retorna uma promessa
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true  })
.then( ()=> {
    console.log('Connectei a sua basse de dados Primeiro')
    app.emit("pronto");
})
.catch(e => console.log(e));


//passamos a nossa função expressa pra uma const App
const app = express();

//abaixo de app para conecta com nosso banco de dados


//falando pro express gerar arquivos statics
app.use(express.static( path.resolve(__dirname, "public")));

//nossos prpois middleware
app.use(meuMidlleware);
//falando pro expreess usar as routas
app.use(routes);


//falando pro express que vamos usar templete ejs
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");



app.on('pronto', () => {
    //sempre ultimoo
app.listen(3333, () => {
    console.log("Is run Runing !");
});
})


