function verificar(){
    var ano = Number.parseFloat(window.prompt(`Qual é o ano que você quer verifivar?`))
    var div1 = window.document.getElementById(`div1`)
    var r1 = 'É bissexto!'
    var r2 = 'Não é bissexto!'
    
    if(ano % 400 == 0){
        div1.innerHTML = (`<strong>Analisando o ano de ${ano}...</strong> <br> ${r1} &#x2714`)
    } else if(ano%4==0 && ano%100!=0){
        div1.innerHTML = (`<strong>Analisando o ano de ${ano}...</strong> <br> ${r1} &#x2714`)
    } else{
        div1.innerHTML = (`<strong>Analisando o ano de ${ano}...</strong> <br> <mark>${r2}</mark> &#x274C`)
        
    }
    
}