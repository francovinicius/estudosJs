// Rest Operator


function convidados(...nomes) {
    console.log(nomes);
}

convidados('vini', 'pablo', 'isa');


function sorteador(...numeros){
    console.log(numeros);

    //floor numero inteiro     //random numero aleatorio
    const numeroGerado = Math.floor(Math.random() * numeros.length);

    //gera a posição do numero
    console.log(numeroGerado);

    //gera o valor do numero
    console.log('O numero gerado foi: ' + numeros[numeroGerado]);


}

sorteador (12, 33, 44, 55, 66, 88, 77)