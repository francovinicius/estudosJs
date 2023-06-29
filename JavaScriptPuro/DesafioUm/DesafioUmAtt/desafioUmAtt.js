
function calcular(event) {
    event.preventDefault(); // manter os valores na página

    //Receber os valores dos imputs
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var resultado = document.getElementById('resultado');
    const btn = document.getElementById('btn')

    var imc = peso / (altura * altura)
    
    btn.classList.add("btn-none");

    //console.log(imc)

    if (imc <= 17) {

        resultado.innerHTML = (`</br>
        <div class="card" style="width: 18rem;">
    <img src="https://cdn.pixabay.com/photo/2018/11/30/13/46/tape-measure-3847817_1280.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title text-center">Muito abaixo do peso!</h5>
    <p class="card-text text-center">Precisamos montar um plano alimentar!!!</p>
    </div>
    </div>
    </br>
    <a href="/" class="btn btn-primary d-flex justify-content-center">Novo Teste!</a>
`);

    } else if (imc > 17 && imc <= 18.49) {
        resultado.innerHTML = (`</br>
        <div class="card" style="width: 18rem;">
    <img src="https://cdn.pixabay.com/photo/2016/11/14/03/06/woman-1822459_1280.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title text-center">Abaixo do peso!</h5>
    <p class="card-text text-center">Estamos quase lá!!!</p>
    </div>
    </div>
    </br>
    <a href="/" class="btn btn-primary d-flex justify-content-center">Novo Teste!</a>`);

    } else if (imc > 18.49 && imc <= 24.99) {
        resultado.innerHTML = (`</br>
        <div class="card" style="width: 18rem;">
    <img src="https://cdn.pixabay.com/photo/2017/07/31/11/40/people-2557536_1280.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title text-center">Peso ideal!</h5>
    <p class="card-text text-center">Continue assim, parabéns!!!</p>
    </div>
    </div>
    </br>
    <a href="/" class="btn btn-primary d-flex justify-content-center">Novo Teste!</a>`);

    } else if (imc > 24.99) {

        resultado.innerHTML = (`</br>
        <div class="card" style="width: 18rem;">
    <img src="https://cdn.pixabay.com/photo/2018/03/21/16/00/obesity-3247168_640.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title text-center">Acima do peso!</h5>
    <p class="card-text text-center">É melhor se cuidar!!!</p>
    </div>
    </div>
    </br>
    <a href="/" class="btn btn-primary d-flex justify-content-center">Novo Teste!</a>`);
    }


}