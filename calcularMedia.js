function media(arr){
    if(arr.length === 0){
        return 0
    }
    let soma = arr.reduce((a,b)=> a + b)
    return soma / arr.length
}

console.log(media([5, 10, 15]))