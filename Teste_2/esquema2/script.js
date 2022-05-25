// Este é um exemplo que lê os arquivo .txt e converte em um novo arquivo .json
const campoTextarea = document.querySelector("#texto");
const alertSuccess = document.getElementById('alert');
let form = document.getElementById('formulario');

function handleFile(files) {
    const reader = new FileReader();
    reader.onload = (event) => {
        let data = event.target.result;
        campoTextarea.value = data;
    };
    reader.readAsText(files[0]);
}

function gravarDados() {
    
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let blob = new Blob([campoTextarea.value], { type: "text/plain;charset=utf-8" });
    saveAs(blob, 'arquivo' + ".json");
    alertSuccess.classList.remove('d-none');
});