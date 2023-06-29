// MAP = PERCORRER TODO UM ARRAY

let lista = ['pablo', 'vinicius', 'isa','ana'];

lista.map((item, index) => {
    // console.log(`Passando ${item} - está na posição ${index}`)
})

// Reduce = busca reduzir um array 

let numeros = [5, 3, 4, 8];

let total = numeros.reduce((acumulador, numero, indice, original) => {

    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - valor até o momento`);
    console.log(`${indice} - indice até o momento`);
    console.log(`${original} - total até o momento`);
    console.log('========================')

    return acumulador += numero;

})

console.log('valor total do reduce: ' + total)