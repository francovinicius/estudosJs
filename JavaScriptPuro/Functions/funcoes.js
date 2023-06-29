var area = document.getElementById('area');

function entrar () {
    var nome = prompt('digite seu nome');

    if(nome === '' || nome === null) {
        alert("ops algo deu errado")
        area.innerHTML = "Clique no botão para acessar";
    } else {
        area.innerHTML = "Bem vindo " + nome + "! ";

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);

    }

    
}

function sair(){
    alert('ate mais!')
    area.innerHTML = "voce saiu"
}

//parametros
function mediaAluno (nota1, nota2) {
    var media = (nota1 + nota2) / 2;

    if (media >= 7){
        alert('Aprovado! média: ' + media)
    }else {
        alert('Reprovado! média: ' + media)
    }
}

function aluno (nome, curso) {

    console.log(mensagem)
}