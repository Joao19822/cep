var btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', e =>{
    e.preventDefault();
    let cep = document.getElementById('cep')
    //endpoint
    let url = `https://viacep.com.br/ws/${cep.value}/json/`;
    //API
    fetch(url)
        .then(retorno => retorno.json())
        .then(dados => {
            if(dados.erro){
                alert('Coloque um cep valido')
            }else{
                for (const key in dados) {
                    console.log(dados[key])

                    try {
                        document.getElementById(key).value = dados[key]
                        
                    } catch (error) {
                        console.log('erro',key)
                    }


                }
            }
        })
})




