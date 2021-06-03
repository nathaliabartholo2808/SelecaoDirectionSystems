const fs = require('fs')





var readFile;
var file;
var fso;

if (file === null) {
    fso = CreateObject("Scripting.FileSystemObject");
    file = fso.CreateTextFile(__dirname + "/bd.txt", True);
} else if (readFile === null) {
    readFile = new FileReader(file);
}




function buscarNome(nome) {
    while (file.AtEndOfStream) {
        let linha = readFile.readAsText(file);
        let achado = linha.search(nome);

        if (achado !== -1) {
            return achado; //achou
        } else {
            return -1;
        }
    }
}

function consultarNome(nome){
    let achado = buscarNome(nome);
    if(achado ===-1){
        //avisar o front que nao existe
    }else{
        //mandar pro front as informações
    }
}



function cadastrarPet(nome, raca, porte) {
    let resultado = buscarNome(nome)
    if (resultado !==-1) {
        file.writeline(nome + " " + raca + " " + porte);
        //avisar o front q cadastrou
    }else{
        //avisar o front que ja possue 
    }
}


exports.login= function (user, senha){
    try {
        const data = fs.readFileSync('./Back/login.txt', 'utf8')
        
        let array = data.split(" ")


        if(array[0]===user && array[1]===senha ){
            return true;
        }else{
            return false;
        }

      } catch (err) {
        console.error(err)
      }

}

