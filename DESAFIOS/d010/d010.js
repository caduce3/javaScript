function calcular(){
    var a = Number.parseFloat(window.prompt(`Qual é o valor de a?`))
    var b = Number.parseFloat(window.prompt(`Qual é o valor de b?`))
    var c = Number.parseFloat(window.prompt(`Qual é o valor de b?`))
    var delta = (b*b) - (4 * a * c)
    var d1 = window.document.getElementById(`d1`)

    d1.innerHTML = `<strong>Resolvendo Bhaskara</strong> <br>
    A equação atual é <strong>DELTA = ${b}<sup>2</sup> - 4 * ${a} * ${c}</strong> <br>
    O valor calculado foi <strong>DELTA = ${delta}</strong>`
}