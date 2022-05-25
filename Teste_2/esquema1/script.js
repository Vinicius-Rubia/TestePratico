// Este é um exemplo que pega os números do .txt e grava no localStorage do navegador
let form = document.getElementById('formulario');
const alertSuccess = document.getElementById('alert');

function handleFile(files) {
    const reader = new FileReader();
    reader.onload = (event) => {
        let data = event.target.result;
        document.querySelector("#texto").value = data;        
    };
    reader.readAsText(files[0]);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let dados = document.querySelector("#texto").value;
    localStorage.setItem('number', dados)
    alertSuccess.classList.remove('d-none');
});