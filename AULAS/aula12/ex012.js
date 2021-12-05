agora = new Date()
var horas = agora.getHours()
console.log(`São exatamente ${horas} horas.`)
if(horas >= 4 && horas < 12 ){
    console.log(`Bom dia.`)
} else if(horas >= 12 && horas < 18){
    console.log(`Boa tarde.`)
} else{
    console.log(`Boa noite`)
}