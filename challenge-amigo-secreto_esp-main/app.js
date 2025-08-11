// Definición de variable global array para almacenar el nombre de los amigos
let amigos = [];

//Función para mostrar los nombres de los amigos ingresados en la lista HTML
function mostrarAmigos() {
    //Referenciar la lista en el HTML para que se muestren los amigos
    let lista = document.getElementById('listaAmigos');

    //Limpiar la lista para evitar los duplicados
    lista.innerHTML = "";

    //Recorrer el array de amigos
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); //creación de la variable local <li>
        li.textContent = amigos [i]; //poner el nombre del amigo dentro del <li>
        lista.appendChild(li); // agregar el <li> a la lista
    }
}

// Función para agregar amigos
function agregarAmigo() {
    // Se captura el valor del input
    let nombreInput = document.getElementById('amigo').value.trim();

    // Validar que el campo no se encuentre vacío
    if (nombreInput === '') {
        alert("Por favor ingrese un nombre"); // Mensaje de campo inválido
        return; // Salir de la función si el campo está vacío
    }

    // Agregar el nombre válido al array 'amigos'
    amigos.push(nombreInput);

    // Limpiar el campo de entrada para que quede vacío
    document.getElementById('amigo').value = '';

    // Mostrar en la consola la lista actualizada de amigos para verificar
    console.log("Lista de amigos:", amigos);

    mostrarAmigos(); // Actualiza la lista en pantalla
}