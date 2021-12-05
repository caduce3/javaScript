function carregar(){
    var msg = window.document.getElementById(`msg`)
    var imagem = window.document.getElementById(`imagem`)
    data = new Date()
    h = data.getHours()
    
    msg.innerHTML = `Agora são ${h} horas.`
    if(h >= 0 && h < 12){
        imagem.src = 'imagens/dia300.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if(h >= 12 && h < 18){
        imagem.src = 'imagens/tarde300.png'
        document.body.style.backgroundColor = '#b9846f'
    } else{
        imagem.src = 'imagens/noite300.png'
        document.body.style.backgroundColor = '#515154'
    }
}