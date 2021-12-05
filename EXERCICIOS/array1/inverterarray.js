//Criar uma função para inverter um array
let vetor = [1, 2, 3, 4, 5]
let v = []

function inverter(vetor){
    for(let i=vetor.length - 1; i>=0; i--){
        v.push(vetor[i])
    }
    return v
}
console.log(inverter(vetor))