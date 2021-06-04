const fs = require('fs')
var fileNameCadastro = __dirname + "/bd.txt"


function buscarNome(nome) {
let cont=0


    let linha = fs.readFileSync(fileNameCadastro, 'utf8')

    let array = linha.split('\u000A')

    if (array ==='') {
        return false
    } else {
        do {
            let achado = array[cont].search(nome);
            
            cont++
            if (achado !== -1) {
                return true; //achou
            }

        } while (array.length>cont);
        return false
    }


}

function consultarNome(nome) {
    let achado = buscarNome(nome);
    if (achado === -1) {
        //avisar o front que nao existe
    } else {
        //mandar pro front as informações
    }
}



exports.cadastrarPet = function (nome, raca, porte) {
    let resultado = buscarNome(nome)

    if (!resultado) {
        fs.writeFile(fileNameCadastro, nome + " " + raca + " " + porte + '\u000A', { flag: 'a+' }, err => {
            console.log(err)
        })
        return true;
    } else {
        return false; //avisar o front que ja possue 
    }
}


exports.login = function (user, senha) {
    try {
        const data = fs.readFileSync(__dirname + '/login.txt', 'utf-8')

        let array = data.split(" ")


        if (array[0] === user && array[1] === senha) {
            return true;
        } else {
            return false;
        }

    } catch (err) {
        console.error(err)
    }

}


exports.eCadastro = function (nomeProcedimento) {
    if (nomeProcedimento === "cadastrar") {
        return true;
    } else {
        return false;
    }

}


exports.eConsulta = function (nomeProcedimento) {
    if (nomeProcedimento === "consultar") {
        return true;
    } else {
        return false;
    }

}
exports.eDeslogar = function (nomeProcedimento) {

    if (nomeProcedimento === "deslogar") {
        return true;
    } else {
        return false;
    }

}


