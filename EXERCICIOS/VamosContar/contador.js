function contar(){
    let inicio = parseFloat(document.getElementById(`inicio`).value) 
    let fim = parseFloat(document.getElementById(`fim`).value)
    let passo = parseFloat(document.getElementById(`passo`).value)
    let d1 = document.getElementById(`d1`)

    if((document.getElementById(`inicio`).value) == "" || (document.getElementById(`fim`).value) == "" || (document.getElementById(`passo`).value) == ""){
        alert(`Algum elemento não esta preenchido!`)
    } else{
        if(inicio < fim){
            d1.innerHTML += ""
            for(let c = inicio; c<=fim; c += passo){
                d1.innerHTML += (`${c} &#x1F449`)
            }
        } else {
            d1.innerHTML += ""
            for(let c = inicio; c>=fim; c -= passo){
                d1.innerHTML += (`${c} &#x1F449`)
            }
        }
        d1.innerHTML += `&#x2714 `
    }
}