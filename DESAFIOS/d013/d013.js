function calcular(){
    let nome = window.prompt(`Qual o nome do aluno?`)
    let n1 = Number.parseFloat(window.prompt(`Nota 1 do aluno(a): ${nome}`))
    let n2 = Number.parseFloat(window.prompt(`Nota 2 do aluno(a): ${nome}`))
    let med = (n1 + n2 ) / 2
    let d1 = window.document.getElementById(`d1`)

    if(med < 3){
        d1.innerHTML = (`Coma a média ${med.toFixed(2)}, o aluno ${nome} está <mark id="mark1">Reprovado</mark>`)
    }else if(med >= 3 && med < 6){
        d1.innerHTML = (`Coma a média ${med.toFixed(2)}, o aluno ${nome} está de <mark id="mark2">Recuperação</mark>`)
    }else{
        d1.innerHTML = (`Coma a média ${med.toFixed(2)}, o aluno ${nome} está <mark id="mark3">Aprovado</mark>`)
    }

}