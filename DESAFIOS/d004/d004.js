function calcular(){
    var nomeproduto = window.prompt(`Que produto você está comprando?`)
    var valorproduto = Number.parseFloat(window.prompt(`Quanto custa este ${nomeproduto} que você está comprando?`))
    var dinheiro = Number.parseFloat(window.prompt(`Quanto de dinheiro você tem para pagar este ${nomeproduto}?`))
    if(dinheiro < valorproduto){
        window.alert(`Não é possível realizar esta compra, dinheiro insuficiente!`)
    } else{
        valorproduto.toFixed(2)
        dinheiro.toFixed(2)
        var calcular = dinheiro - valorproduto
        window.alert(`Você comprou um ${nomeproduto} que custou R$ ${valorproduto}.
        Você deu R$ ${dinheiro} em dinheiro e vai receber R$ ${calcular} de troco. 
        Volte Sempre!`)
        
    }

}