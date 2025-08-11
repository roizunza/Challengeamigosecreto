// Definición de variable global array para almacenar el nombre de los amigos
let amigos = [];

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
}