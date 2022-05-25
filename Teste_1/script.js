const form = document.getElementById('formulario');
let inputNumbers = document.getElementById('inputNumbers');
let add = document.getElementById('add');
let list = [];

add.addEventListener('click', function () {
    let dados = parseInt(inputNumbers.value);
    list.push(dados);
    document.getElementById("addNumbers").innerHTML = list
    form.reset();
});

form.addEventListener('submit', function (e) {
    let newlist = list.sort(function (a, b) {
        if (a < b) {
            return -1;
        } else {
            return true;
        }
    });
    console.log(newlist);
    document.getElementById("orderNumbers").innerHTML = list

    e.preventDefault();
});