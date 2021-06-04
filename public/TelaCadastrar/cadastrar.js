const json = require("express")

function cadastrar() {
    let nomePet = document.getElementById("nomePet").value
    let racaPet = document.getElementById("racaPet").value
    let portePet = document.getElementById("portePet").value


    if (nomePet.length === 0) {
        alert("O nome do pet está vazio")
    } else if (racaPet.length === 0) {
        alert("A raça do pet está vazio")
    } else if (portePet.length === 0) {
        alert("O porte do pet está vazio")
    } else {

        fetch('http://localhost:3000/TelaCadastrar/cadastrar.html', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomePet,
                racaPet,
                portePet,

            })

        }).then(data => data.text()).then(url => {

            if (url.length !== 0) {
                alert("Pet Cadastrado com sucesso")
                window.location.replace(url)
            } else {
                alert("Pet já cadastrado!")
            }
        })

    }

}

function voltar() {
    //let url = encodeURIComponent();
    alert("!")
     fetch('http://localhost:3000/TelaCadastrar/cadastrar.html', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               "metodo":"voltar"           
            })

        }).then(data => data.text()).then(url => {
        window.location.replace(url)

    })


}