// Implemente o algoritmo "bubble sort" para um array de números 

let vetor = [1, 3, 4, 912, 0 , 231, 213, 1212]

function bubblesort(vetor){
    let atual = vetor[i]
    for(let i=0; i<vetor.length; i++){
        if(atual > vetor[i+1]){
            vetor[i] = vetor[i+1]
            vetor[i+1] = atual
        }
    }
}
console.log(bubblesort(vetor))