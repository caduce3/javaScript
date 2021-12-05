//Calcular a soma dos números de um array 

let v1 = [1, 2, 3, -4, -131, 123412, -1002, 213, -3123, - 129180, 9800]
function somarvetor(v1){
    let soma = 0
    for(let i=0; i<v1.length; i++){
        soma = soma + v1[i]
    }
    return soma
}
console.log(somarvetor(v1))