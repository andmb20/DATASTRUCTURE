const nameInput = document.getElementById("name");
const notaInput = document.getElementById("nota");

let listaNomeENota = [];

document.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("deu certo")
    listaNomeENota.push({name: nameInput.value, nota: notaInput.value},);
})

console.log(listaNomeENota)
