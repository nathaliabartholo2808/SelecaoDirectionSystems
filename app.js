const express = require('express');
const path= require('path');


const router = express.Router();
const app = express();
const port = 3000;


var dirname = "C:/Users/tatin/Google Drive/Estágio/Repositorios/SelecaoDirectionSystems/Front/"

app.get('/login', (req, res) => {
  app.use( express.static(path.join(__dirname, '/Front/TelaLogin')))
  })

  app
  .get( '/', function( req, res ) {
    res.sendFile( path.join( dirname, 'TelaLogin', 'index.html' ));
  });


app.get('/Menu', (req, res) => {
  res.sendFile(path.join(__dirname+"/menus.html"))
})

app.use( express.static(path.join(__dirname, '/Front/TelaLogin')))

app.use('/',router);

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`)
})
