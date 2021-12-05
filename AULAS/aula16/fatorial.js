function fatorial(num){
    let fat = 1
    for(let c = num; num > 1; c--){
        fat = fat * c
    }
    return fat
}
console.log(fatorial(5))