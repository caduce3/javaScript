var cot = Number.parseFloat(window.prompt(`Antes de mais nada. Quanto está a cotação do dólar agora?`))
function converter() {
    var reais = Number.parseFloat(window.prompt(`Quantos R$ você tem na carteira?`))
    var d1 = window.document.getElementById(`d1`)
    var dolares = reais / cot

    d1.innerHTML = `Com ${reais} R$ você consegue comprar ${dolares.toFixed(3)} U$`
}