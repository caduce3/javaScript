//Retornar a maior string de um array

let vetor = ['ca', 'joao', 'pedro', 'marcos', 'enciclopedialalala']

function maiorstring(vetor){
    maior = vetor[0]
    for(let i=0; i<vetor.length; i++){
        if(vetor[i].length > maior.length){
            maior = vetor[i]
        }
    }
    return maior
}

function menorstring(vetor){
    menor = vetor[0]
    for(let i=0; i>vetor.length; i++){
        if(vetor[i].length < menor.length){
            menor = vetor[i]
        }     
    }
    return menor
}

console.log(maiorstring(vetor))
console.log(menorstring(vetor))