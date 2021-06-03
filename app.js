const express = require('express');
const path= require('path');
const processos = require('./Back/codigo')
const cors = require('cors')


const router = express.Router();
const app = express();
const port = 3000;

app.use(cors())
app.use( express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended:true,
}));

app.use(express.json());


app.post('/login',function(req,res){
  let dados =req.body

  let resultado = processos.login(dados.user,dados.password)
  if(resultado){
    res.send('http://localhost:3000/TelaMenu/Menu.html')
  }else{
    res.send("")
  }
})

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`)
})