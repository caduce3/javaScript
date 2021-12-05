let num = document.getElementById(`num`)
let lista = document.getElementById(`lista`)
let res = document.getElementById(`res`)
let vetor = []

function adicionar(){
    if(num.value == ""){//verificando se a caixa está vazia 
        alert(`Está vazio!`)
    } else if(num.value < 1 || num.value > 100){//condição p/ ser maior que 1 e menor que 100
        alert(`Digite um número entre 1 e 100!`)
    } else if(vetor.indexOf(num.value) != -1){ //se der retorno dif. de -1 ele já está adc.
        alert(`Número já adicionado!`)
    } else{
        vetor.push(num.value) //add num colocado ao vetor
        let item = document.createElement(`option`)// criando um option (opção) para o select
        item.text = `valor ${num.value} adicionado`//criando um rotulo para op criada
        lista.appendChild(item) //adc a option a lista(select)
    }
    num.value = '' //p/ qnd. adicionar limpar automaticamente
    num.focus()// ficar piscando quando limpar
}

function soma(vetor){
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma = soma + Number(vetor[i])
    }
    return soma
}

function media(vetor){
    let media = soma(vetor)
    return media / vetor.length
}

function maior(vetor){
    let maior = vetor[0]
    for(let i=0; i<vetor.length; i++){
        if(vetor[i].length > maior.length)
        maior = vetor[i]
    }
    return maior
}

function menor(vetor){
    let menor = vetor[0]
    for(let i=0; i>vetor.length; i++){
        menor = vetor[i]
    }
    return menor
}

function finalizar(){
    if(vetor.length == 0){
        alert(`Adicione algo!`)
    } else {
        res.innerHTML  = (`O tamanho é: ${vetor.length} <br>
        Maior valor: ${maior(vetor)} <br>
        Menor valor: ${menor(vetor)} <br>
        Soma dos valores: ${soma(vetor)} <br>
        Media dos valores: ${media(vetor)}`)
    }
}

