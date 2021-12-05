// Localizar o maior valor dentro de um array de números

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

function maior(vetor){
    let maior = vetor[0]
    for(let i=0; i<vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
    }
    return maior
}
console.log(maior(vetor))