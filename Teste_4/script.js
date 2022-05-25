let soma = 0;
let y;
let metade;

function numberVerify() {
    const x = document.getElementById('number').value;

    metade = x / 2;

    for (y = 1; y <= metade; y++) {
        if (x % y == 0) {
            soma = soma + y;
        }
    }
    
    if (soma == x) {
        alert(`O número ${x} é um número perfeito!`);
    } else {
        alert(`O número ${x} não é um número perfeito!`);
    }
}