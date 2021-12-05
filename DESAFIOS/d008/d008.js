function desconto(){
    var desconto = Number.parseFloat(window.prompt(`Digite o valor do desconto que deseja:`))
    var nomeprod = window.prompt(`Qual o nome do produto?`)
    var original = Number.parseFloat(window.prompt(`Digite o valor do produto:`))
    var d1 = window.document.getElementById(`d1`)
    var calcular = desconto / 100
    var valorfinal = original * calcular
    var menos = original - valorfinal

    d1.innerHTML = (`Calculando desconto de ${desconto}% para ${nomeprod} <br>
    O preço original do produto é ${original} R$ <br>
    O desconto é de ${desconto}% = - ${menos} R$ <br>
    Seu produto custava ${original} R$ e ficará ${valorfinal} R$.`)
}