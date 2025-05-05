const nameInput = document.getElementById("name");
const notaInput = document.getElementById("nota");
const tbody = document.querySelector("tbody");

let listaNomeENota = [];

document.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("deu certo")
    listaNomeENota.push({ name: nameInput.value, nota: notaInput.value },);
    renderizarMensagem(listaNomeENota);
})

//console.log(listaNomeENota);

function renderizarMensagem(list) {
    const tr = tbody.insertRow();
    const td_name = tr.insertCell();
    const td_nota = tr.insertCell();

    for (let i = 0; i < list.length; i++) {
        td_name.innerText = list[i].name;
        td_nota.innerHTML = list[i].nota;
    }
}

