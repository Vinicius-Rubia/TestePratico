let form = document.getElementById('formulario');
let number = document.getElementById('number');

function showTabuada(number) {
    let tabuadaResult = '';

    for (let i = 1; i <= 10; i++) {
        tabuadaResult += `${number} x ${i} = ${number * i} <br>`
    }
    document.getElementById('resultado').innerHTML = tabuadaResult;
}
 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    showTabuada(number.value);
});