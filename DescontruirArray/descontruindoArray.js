/*


let pessoa = {
    nome: "vini",
    sobrenome: "franco",
    empresa: 'Sarton',
    cargo: "programador"
};

//console.log (pessoa)

let nome = 'teste'

// quando temos uma variavel com o nome que o onjeto possui podemos renomea-lo conforme o ex nome abaixo
// descontruição
const {nome: nomePessoa, cargo, empresa} = pessoa;

console.log(nomePessoa)
console.log(nome + " " + empresa)
console.log(`${nomePessoa} ${empresa}`)

*/


//Desconstruior o Array

let nomes = ['vinicius', 'pablo', 'isa'];
/*
console.log(nomes[0]);

let {2:romeu,} = nomes;
console.log(romeu);

*/

let [primeiroNome, segundoNome] = nomes;
console.log(primeiroNome)