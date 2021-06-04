function mudarTela(tela) {
    let url;

    switch (tela) {
        case "cadastrar":
            fetch('http://localhost:3000/TelaMenu/Menu.html', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "processo": "cadastrar",
                })

                
            }).then(data => data.text()).then(url => {
                if (url.length !== 0) {
                    window.location.replace(url)
                }
            })
            break;
        case "consultar":
            fetch('http://localhost:3000/TelaMenu/Menu.html', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "processo": "consultar",
                })

            }).then(data => data.text()).then(url => {
                if (url.length !== 0) {
                    window.location.replace(url)
                }
            })

            window.location.replace("")
            break;
            case "deslogar":
            fetch('http://localhost:3000/TelaMenu/Menu.html', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "processo": "deslogar",

                })

            }).then(data => data.text()).then(url => {
                if (url.length !== 0) {
                    window.location.replace(url)
                }
            })
    }
}