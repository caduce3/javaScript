/*let vint = [1,2,3,4]
let vstr = ['a', 'b', 'c', 'd']
let vdou = [1.1, 2.2, 3.3, 4.4] 

let unirvet = [].concat(vint, vstr, vdou) //concatenar maneira 1
let unirspread = [vint, vstr, vdou] //concatenar maneira 2
console.log(`${unirvet}`) 
console.log(`${unirspread}`)
*/
let vpilha = [1,2,3,4,5]
let vadc = []
vadc.push(6,7,8,9,10)
let unir = [].concat(vpilha, vadc) 

console.log(`Vpilha inicial: ${vpilha}`)
console.log(`Vadc inicial: ${vadc}`)
console.log(`Adicionando no Vpilha o Vadc = ${unir}`)

