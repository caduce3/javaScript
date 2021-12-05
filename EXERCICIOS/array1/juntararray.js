//juntar arrays
let v1 = [84]
let v2 = [987361040]

function juntar(v1, v2){ 
    return [].concat(v1, v2)
}
console.log(juntar(v1, v2))