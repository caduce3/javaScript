let vetor = [10,20,30,40,50,60,70,80,90]
let novovetor = [0,0]

for(let i = 0; i<vetor.length; i++){
    if(i<((vetor.length-1) / 2)){
        novovetor[0] += vetor[i]
    } else{
        novovetor[1] += vetor[i]
    }
}
console.log(novovetor)