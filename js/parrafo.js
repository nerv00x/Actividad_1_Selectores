var contenedor = document.getElementById("contenedor");
var select = document.createElement("select");

// Función para generar párrafos
function generarParrafos(cantidad) {
    for (var i = 1; i <= cantidad; i++) {
        // Crea un elemento de párrafo y establece su contenido
        var parrafo = document.createElement("p");
        parrafo.textContent = "Párrafo " + i;
        parrafo.id = "parrafo" + i;

        // Agrega el párrafo al contenedor
        contenedor.appendChild(parrafo);

        // Crea una opción para el select
        var option = document.createElement("option");
        option.value = i;
        option.text = "Párrafo " + i;
        console.log(parrafo)
        // Agrega la opción al select
        select.appendChild(option);
    }

    // Agrega el select al contenedor
    contenedor.appendChild(select);
    select.id = "select-parrafo";
    console.log(select);

    // Agrega un evento para manejar la selección
    select.addEventListener("change", mostrarParrafoSeleccionado);
}

// Función para mostrar el párrafo seleccionado
function mostrarParrafoSeleccionado() {
    var indiceSeleccionado = select.value - 1; // Restamos 1 para obtener el índice correcto
    var parrafos = contenedor.querySelectorAll("p");

    // Oculta todos los párrafos
    for (var i = 0; i < parrafos.length; i++) {
        parrafos[i].style.display = "none";
    }

    // Muestra el párrafo seleccionado
    if (parrafos[indiceSeleccionado]) {
        parrafos[indiceSeleccionado].style.display = "block";
    }
}

// Llama a la función para generar 5 párrafos y la lista desplegable
generarParrafos(5);

