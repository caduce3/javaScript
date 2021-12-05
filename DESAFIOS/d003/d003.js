function calcular(){
    var n1 = Number.parseFloat(window.prompt(`Digite um número inteiro qualquer.`))
    var suce = n1 + 1
    var ante = n1 - 1
    var resul = window.alert(`Antes de ${n1}, temos o número ${ante}. Depois de ${n1}, temos o número ${suce}`)
}