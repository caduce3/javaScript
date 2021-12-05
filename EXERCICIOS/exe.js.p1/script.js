function carregar(){

    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var h = data.getHours()
    
    msg.innerHTML = `Agora são ${h} horas.`
    if(h >= 0 && h < 12){
        img.src = 'imagens/dia300.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if(h >= 12 && h <= 18){
        img.src = 'imagens/tarde300.png'
        document.body.style.backgroundColor = '#b9846f'
    } else{
        img.src = 'imagens/noite300.png'
        document.body.style.backgroundColor = '#515154'
    }
}
