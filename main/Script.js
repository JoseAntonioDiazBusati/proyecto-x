/**
 * Genera las tablas de multiplicar del 1 al 10 y las muestra en el elemento con id "tabla".
 *
 * Recorre los números del 1 al 10 y para cada uno genera su tabla de multiplicar,
 * mostrando el resultado en formato "j x i = multiplicacion".
 *
 * El resultado se inserta como HTML en el elemento con id "tabla".
 *
 * @example
 * // En el HTML debe existir un elemento con id="tabla"
 * // <div id="tabla"></div>
 * // Al cargar la página, se mostrarán todas las tablas de multiplicar del 1 al 10.
 */

let mostrar = ""
for (let j = 1; j <= 10; j++){
    for(let i = 0; i <= 10; i++){
        let multiplicacion = i * j
        let resultado = j +" x "+ i +" = "+ multiplicacion
        mostrar += resultado + "<br>"
    }
    mostrar += "<br>"
}
document.getElementById("tabla").innerHTML = mostrar
