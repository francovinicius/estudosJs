// while = enquanto

var x = 5;

function enquanto() {

    while (x <= 10) {
        document.write("<br> O valor do x é " + x);

        //aumentando o valor do x    
        x++
    }
}


// For = Para

// a começa em 0 entao ele vai fazer a++ até 5

var valorDeA = 30;

function para() {
    for (a = 0; a < valorDeA; a++) {
        document.write("<br> O valor do a é " + a);
    }
}

// Switch 

function pedir() {
    var pedindo = prompt("digite um valor de 1 a 4");

    switch (Number(pedindo)) {
        case 1:
            alert('voce escolheu suco');
            break;
        case 2:
            alert('voce escolheu sorvete');
            break;
        case 3:
            alert('voce escolheu agua');
            break;
        case 4:
            alert('garçom esta vindo até você');
            break;
        default:
            alert('escolha uma opção valida');
            break;

    }
}