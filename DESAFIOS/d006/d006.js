function converter(){
    var temperatura = Number.parseFloat(window.prompt(`Digite uma temperatura em °C (Celsius):`))
    var d1 = window.document.getElementById(`d1`)
    var kelvin = temperatura + 273.15
    var fah = (temperatura * 9/5) + 32
    
    d1.innerHTML = `<strong>A temperatura de ${temperatura}°C, corresponde a...</strong> <br>
    ${kelvin.toFixed(2)} °K (Kelvin) <br>
    ${fah.toFixed(2)} °F (Fahrenheit)`
}