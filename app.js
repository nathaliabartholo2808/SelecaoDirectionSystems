const express = require('express');
const path = require('path');
const processos = require('./Back/codigo')
const cors = require('cors')


const router = express.Router();
const app = express();
const port = 3000;

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());


app.post('/login', function (req, res) {
  let dados = req.body
  let resultado = processos.login(dados.user, dados.password)
  if (resultado) {
    res.send('http://localhost:3000/TelaMenu/Menu.html')
  } else {
    res.send("")
  }
})

app.post('/TelaMenu/Menu.html', function (req, res) {
  let dados = req.body
  let url;
  let resultado = processos.eCadastro(dados.processo)

  if (resultado) {
    url = "http://localhost:3000/TelaCadastrar/cadastrar.html"
    resultado = false;
    res.send(url)
  } else {
    dados.
      resultado = processos.eConsulta(dados.processo);
    resultado = false
    if (resultado) {
      url
      res.send(url);
    } else {
      resultado = processos.eDeslogar(dados.processo);
      if (resultado) {


        url = "http://localhost:3000/"
        res.send(url);
      }

    }
  }

})

app.post('/TelaCadastrar/cadastrar.html', function (req, res) {
  let dados = req.body;
  let url = "http://localhost:3000/TelaMenu/Menu.html";
  if (dados.hasOwnProperty('metodo')) {
    res.send(url)
  } else {
    let resultado = processos.cadastrarPet(dados.nomePet, dados.racaPet, dados.portePet)
    if (resultado) {
      res.send(url)
    } else {
      res.send("")
    }
  }
})





app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`)
})