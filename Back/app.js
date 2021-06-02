const express = require('express');
const path= require('path');


const router = express.Router();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+"../"))
})

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`)
})