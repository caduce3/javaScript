function calcular(){
  let num = Number.parseInt(window.document.getElementById(`num`).value)
  let d1 = window.document.getElementById(`d1`)
  
  if(window.document.getElementById(`num`).value == ""){
    window.alert(`Digite um número!`)
  } else {
    d1.innerHTML = ''
    for(let c = 0; c <= 10; c++){
      d1.innerHTML += `${num} x ${c} = ${num*c} <br>`
    }
  }
  
}