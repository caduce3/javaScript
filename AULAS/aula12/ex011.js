var idadevotar = 67

if(idadevotar < 16){
    console.log(`Não vota.`)
} else if (idadevotar < 18 || idadevotar > 65){
    console.log(`Voto opcional.`)
} else if(idadevotar >= 18){
    console.log(`Voto obrigatório.`)
} else if(idadevotar >= 67){
    console.log(`Voto opcional.`)
}