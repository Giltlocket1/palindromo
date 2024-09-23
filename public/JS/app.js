// Función para invertir una cadena usando .map()
const invertirPalabra = (palabra) => {
    let caracteres = [...palabra]; // Convertimos la palabra en un array de caracteres
    let palabraInvertida = caracteres.map((_, i) => caracteres[caracteres.length - 1 - i]).join('');
    return palabraInvertida;
};

// Función flecha para verificar si una palabra es palíndromo
const esPalindromo = (palabra) => {
    palabra = palabra.toLowerCase().replace(/\s+/g, ''); // Normalizamos la palabra
    return palabra === invertirPalabra(palabra); // Comparamos con la palabra invertida
};

// Función para mostrar el resultado
const mostrarResultado = (mensaje, esPalindromo) => {
    const alertClass = esPalindromo ? 'alert-success' : 'alert-danger';
    const $resultado = $('#resultado');
    $resultado.removeClass('d-none alert-success alert-danger').addClass(alertClass).text(mensaje);
};

// Evento al hacer clic en el botón
$('#btnVerificar').on('click', () => {
    const palabra = $('#inputPalabra').val();

    if (palabra.toLowerCase() === "boobtrap") {
        mostrarResultado("La palabra 'boobtrap' NO es un palíndromo.", false);
    } else if (esPalindromo(palabra)) {
        mostrarResultado(`La palabra '${palabra}' ES un palíndromo.`, true);
    } else {
        mostrarResultado(`La palabra '${palabra}' NO es un palíndromo.`, false);
    }
});
