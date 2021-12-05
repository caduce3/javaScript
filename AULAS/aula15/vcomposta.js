let num = [14,18,97,63,55,84,2]
let p = num.indexOf(2)
/*for(let pos = 0; pos<num.length; pos++){
    console.log(`${pos}: ${num[pos]}`)
}
*/

for(pos in num){
    console.log(`${pos}: ${num[pos]}`)
}
console.log(`${num.indexOf(18)}`)