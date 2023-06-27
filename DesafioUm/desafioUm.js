
function calcular(event) {
    event.preventDefault(); // manter os valores na página

    //Receber os valores dos imputs
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var resultado = document.getElementById('resultado');

    var imc = peso / (altura * altura)

    //console.log(imc)

    if (imc <= 17) {
        resultado.innerHTML = ('<br/><br/> Muito abaixo do peso');
    } else if (imc >17 && imc <= 18.49) {
        resultado.innerHTML = ('<br/><br/> Abaixo do peso');
    } else if (imc >18.49 && imc <= 24.99) {
        resultado.innerHTML = ('<br/><br/> Normal');
    } else if (imc > 24.99) {
        resultado.innerHTML = ('<br/><br/> Acima do peso');
    }
    

}

