const { json } = require("express")


function getUserInfo() {
    var user = document.getElementById("user").value
    var password = document.getElementById("password").value
    var valorMinimo = 0


    if (user.length === valorMinimo) {
        alert("Usuário em branco")
    } else if (password.length === valorMinimo) {
        alert("Senha em branco")
    }else {
        
        
        fetch('http://localhost:3000/login',{
            method:'post',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify( {user,
                    password,

                })

        }).then(data =>  data.text()).then(url =>{
            if(url.length!==0){
            window.location.replace(url) 
            }else{
                alert("Senha Errada!")
            }
        
    })
        

    }

}