// includes = verificar se inclui algo

const nomes = ['vini', 'pablo', 'isa'];


function pesquisar () {
  //a busca é case sensitive
  let pesquisa = nomes.includes("vini")

  if (pesquisa === true) {
    console.log('boa');
  }
  console.log('ruim');
}

// pesquisar();

//StartsWith = se começa com...

let nome = 'vini'
//console.log(nome.startsWith('v'));


//endsWith = se termina com...

let num = '2935';
console.log(num.endsWith('35'));