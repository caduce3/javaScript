//Calcular a média de todos os números de um array 

let v1 = [1, 3, 9, 15, 90]
function media(v1){
    let soma = 0
    
    for(let i=0; i<v1.length; i++){
        soma = soma + v1[i] 
    }
    return soma / v1.length
}
console.log(media(v1))

