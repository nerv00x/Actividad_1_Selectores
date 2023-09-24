

// funciones
function CambiarTamaño(valor) {
    let selector = document.querySelector("#select-parrafo");
    let parrafo = document.querySelector(`#parrafo${selector.value}`)
    console.log(parrafo)
    if(valor == "grande"){
        parrafo.setAttribute("class", "grande")
    }else if(valor == "normal"){
        parrafo.setAttribute("class", "normal")
    }else {
        parrafo.setAttribute("class", "pequeno")
}
}
