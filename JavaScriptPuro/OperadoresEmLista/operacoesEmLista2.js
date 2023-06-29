// find = buscar alguma coisa

let listagem = [ 3, 4,'vini', 5,'pablo', 6, 8];

let busca = listagem.find((item) => {
//condicao
if(item === 'pablo'){
   return console.log(item + ' da kenzie');
}
})




// filter = filtrar

let palavras = ['vini', 'pablo', 'isa', 'wagner'];


let resultado = palavras.filter((item) => {

    //retorna nomes maiores ou iguais a 4 caracteres.
    return item.length <= 4;
})

console.log(resultado)