//spread operator

let primeiros = [1, 2, 3];

let somaUm = [primeiros, 4, 5, 6];

let numeros = [...primeiros, 4, 5, 7];

console.log(numeros)
console.log(somaUm)

let pessoa = {
    nome:'vini',
    idade: 29,
    cargo: 'rh'
}

let novaPessoa = {
    ...pessoa,
    status: 'ativo',
    cidade: 'vr'
}

console.log(novaPessoa)



function testeDeUsabilidade () {
    let name = prompt('qual seu nome?');
    let city = prompt('qual sua cidade?');

    let juncao = [name, city]

    let name2 = prompt('qual seu nome?');
    let city2 = prompt('qual sua cidade?');

    let juncao2 = [...juncao, name2, city2];

    console.log(juncao2)
    
}
