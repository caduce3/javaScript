//Criar uma função que converta uma temperatura de Fahrenheit para Celsius 
function converter(fah){
    fah = ((fah - 32) * 5/9)
    return fah
}
console.log(converter(100))