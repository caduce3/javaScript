function verificar(){ //função verificar, para quando clicar no botão executar o código

    var data = new Date() //representa um único momento no tempo
    var ano = data.getFullYear() //Retorna o ano da data especificada de acordo com a hora local (p/ pegar o ano que estamos de acordo com o sistema)
    var fano = window.document.getElementById(`txtano`) //pegando o valor do input number pelo id(txtano) e atribuindo a variavel fano
    var res = window.document.getElementById(`res`) //pegando o valor da div pelo id(res) e atribuindo a variavel res
    

    if(fano.value.length == 0 || Number(fano.value) > ano){ //SE a variavel tiver o valor de comprimento = 0 OU a variavel fano for maior que o ano
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)//emitir um alerta de ERRO
    } else { //SENÃO
        var fsex = document.getElementsByName(`radsex`) //pegando o valor do input radio pelo nome(radsex) e atribuindo a variavel fsex
        var idade = ano - Number(fano.value) //pegando o ano do sistema pela variavel ano e subtraindo do valor digitado no input number id(txtano) que está atribuido a variavel fano .. (Number(fano.value) é para fzr a conversão para número)
        var genero = '' //criando variavel genero e atribuindo ela a uma string vazia
        var img = document.createElement(`img`) //criando um elemento img e atribuindo a uma variavel chamada img
        img.setAttribute(`id`, `foto`) //dizendo que a variavel img que é um elemento img, agora tem um identificador chamado foto
        if(fsex[0].checked){ //vendo se o checked (opção do usuário) está na posição 0 (masculino)
            genero = 'Homem' //se a marcação estiver na posição 0, genero recebe a string nome
            if(idade >= 0 && idade < 10){ //se a idade for maior ou igual a 0 E menor que 10
                img.setAttribute(`src`, `imagens/bbhomem250.png`) //dizendo que a variavel img aponta para o arquivo de imagem desejado (se a condição acima for satisfeita, aparecera o arquivo selecionado)
            }else if(idade >= 10 && idade < 50){ //senão, se a idade for maior ou igual a 10 e menor que 50
                img.setAttribute(`src`, `imagens/jovemhomem250.png`) //dizendo que a variavel img aponta para o arquivo de imagem desejado (se a condição acima for satisfeita, aparecera o arquivo selecionado)
            }else{ //se não
                img.setAttribute(`src`, `imagens/idosohomem250.png`) //dizendo que a variavel img aponta para o arquivo de imagem desejado (se a condição acima for satisfeita, aparecera o arquivo selecionado)
            } 
        } else if(fsex[1].checked){ //verificando se o checked está na posição 1(feminino)
            genero = 'Mulher'// se estiver na posição 1 o genero recebe feminino
            if(idade >= 0 && idade < 10){ //se a idade for maior/igual a 0 e menor que 10
                img.setAttribute(`src`, `imagens/bbmulher250.png`) //a variavel img aponta para este endereço na linha
            }else if(idade >= 10 && idade < 50){
                img.setAttribute(`src`, `imagens/jovemmulher250.png`) //a varivael img aponta para este endereço da linha
            }else{
                img.setAttribute(`src`, `imagens/idosamulher250.png`)//a variavel imgaponta para este endereço da linha
            }
        }
        img.style.textAlign = 'center' //para a variavel img ficar centralizada
        res.innerHTML = `${genero} com ${idade} anos.` //pegando todo o texto HTML
        res.appendChild(img)
    }

}