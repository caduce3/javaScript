function converter(){
    var metros = Number.parseFloat(window.prompt(`Digite uma distância em metros (m):`))
    var d1 = window.document.getElementById(`d1`)
    var km = metros / 1000
    var hm = metros / 100
    var dc = metros / 10
    var deci = metros * 10
    var cm = metros * 100
    var mm = metros * 1000

    
    
    d1.innerHTML = `<strong>A distância de ${metros} metros, correspondade a..</strong> <br>
    ${km.toFixed(3)} quilômetros (Km) <br>
    ${hm.toFixed(3)} hectômetros (Hm) <br>
    ${dc.toFixed(3)} decâmetros (Dam) <br>
    ${deci.toFixed(3)} decímetros (dm) <br>
    ${cm.toFixed(3)} centímetros (cm) <br>
    ${mm.toFixed(3)} milímetros (mm)`

}