function verificar(){
    let preant = Number.parseFloat(window.prompt(`Qual o preço anterior do produto?`))
    let preatual = Number.parseFloat(window.prompt(`Qual o preço atual do produto?`))
    let d1 = window.document.getElementById(`d1`)
    let dif1 = preant - preatual
    let dif2 = preatual - preant

    if(preant > preatual){
    d1.innerHTML = `O produto custava R$ ${preant} e agora custa R$ ${preatual}. <br>
    Hoje o produto está mais barato. <br>
    O preço diminuiu R$ ${dif1} em relação ao preço anterior.`
    } else if(preant < preatual){
        d1.innerHTML = `O produto custava R$ ${preant} e agora custa R$ ${preatual}. <br>
        Hoje o produto está mais caro. <br>
        O preço subiu R$ ${dif2} em relação ao preço anterior.`
    } else{
        d1.innerHTML = (`O preço continua o mesmo`)
    }
}