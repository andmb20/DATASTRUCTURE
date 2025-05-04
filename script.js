const nameInput = document.getElementById("name");
const notaInput = document.getElementById("nota");
const divMensagem = document.querySelector("div");

let listaNomeENota = [];

document.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("deu certo")
    listaNomeENota.push({name: nameInput.value, nota: notaInput.value},);
    renderizarMensagem(listaNomeENota);
})

console.log(listaNomeENota);

function renderizarMensagem(list) {
    const codeMensagem = document.createElement("code");
    console.log(listaNomeENota);
    codeMensagem.innerHTML = JSON.stringify(list);
    divMensagem.innerHTML = "";
    divMensagem.appendChild(codeMensagem);
}

