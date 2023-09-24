

// funciones
function CambiarTamaño(valor) {
    let selector = document.querySelector("#select-parrafo");
    let parrafo = document.querySelector(`#parrafo${selector.value}`)
    console.log(parrafo)
    if (valor == "grande") {
        parrafo.setAttribute("class", "grande")
    } else if (valor == "normal") {
        parrafo.setAttribute("class", "normal")
    } else {
        parrafo.setAttribute("class", "pequeno")
    }
}

function CambiarColor(valor) {
    let selector = document.querySelector("#select-parrafo");
    let parrafo = document.querySelector(`#parrafo${selector.value}`)
    console.log(parrafo)
    if (valor == "verde") {
        parrafo.classList.remove("rojo")
        parrafo.classList.remove("negro")
        parrafo.classList.add("verde")
    } else if (valor == "rojo") {
        parrafo.classList.remove("verde")
        parrafo.classList.remove("negro")
        parrafo.classList.add("rojo")
    } else {
        parrafo.classList.remove("rojo")
        parrafo.classList.remove("verde")
        parrafo.classList.add("negro")
    }
}
