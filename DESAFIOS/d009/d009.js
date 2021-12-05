function reajuste(){
    var funcionario = window.prompt(`Qual é o nome do funcionário?`)
    var salario = Number.parseFloat(window.prompt(`Qual é o salário de ${funcionario}?`))
    var porcentagem = Number.parseFloat(window.prompt(`O salário de ${funcionario} vai ser reajustado em qual porcentagem?`))
    var d1 = window.document.getElementById(`d1`)
    var calcporcentagem = ( porcentagem / 100 ) * salario
    var newsalario = salario + calcporcentagem

    d1.innerHTML = `${funcionario} recebeu um aumento salarial! <br>
    O salário atual era de R$ ${salario}. <br>
    Com o aumento de ${porcentagem}%, o salário vai aumentar R$ ${calcporcentagem}. <br>
    E a partir daí, ${funcionario} vai passar a ganhar R$ ${newsalario}.`
}