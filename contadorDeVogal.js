function contadorDeVogal(palavra){
    let vogais = 'AEIOUaeiou'
    let contador = 0
    for(let i = 0; i < palavra.length; i++){
        if(vogais.includes(palavra[i])){
            contador++
        }
    }
    return contador
}
console.log(contadorDeVogal('a'))