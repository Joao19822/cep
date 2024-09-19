var c = prompt('Qual seu cep meu querido(a)?')
var endpoint = `https://viacep.com.br/ws/${cep}/json/`

fetch(endpoint)
    .then(resposta => resposta.json())
    .then(resultado => {
        console.log(resultado)


        document.getElementById('lugar').value = resultado.lugar
    })


