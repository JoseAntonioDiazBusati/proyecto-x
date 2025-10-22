Documentación del proceso y preguntas
a) Identificación de herramientas de generación de documentación

    JSDoc: Herramienta que genera documentación HTML del código JavaScript a partir de los comentarios estructurados en el código fuente. Interpreta la sintaxis estándar de JSDoc.

    wkhtmltopdf: Herramienta de línea de comandos que convierte archivos HTML en PDF.

b) Documentación de componentes

Fragmento comentado del archivo Script.js usando el estilo JSDoc:

```js
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
let mostrar = "";
for (let j = 1; j <= 10; j++) {
    for (let i = 0; i <= 10; i++) {
        let multiplicacion = i * j;
        let resultado = j + " x " + i + " = " + multiplicacion;
        mostrar += resultado + "<br>";
    }
    mostrar += "<br>";
}
document.getElementById("tabla").innerHTML = mostrar;
```
Se utiliza el estilo oficial de JSDoc, colocando los comentarios encima de las funciones y usando etiquetas como @param, @returns y @example.
c) Multiformato

El segundo formato generado es PDF.

    Se instala wkhtmltopdf en el workflow y se añade el paso de conversión de HTML a PDF, permitiendo así distribuir la documentación en ambos formatos.

d) Colaboración

GitHub facilita la colaboración permitiendo:

    Solicitudes de Pull Request (PR) desde ramas independientes.

    Asignación de revisores para verificar y aprobar cambios antes de fusionar.

    Protección de ramas para asegurar que solo los PRs aprobados se fusionen.

    Actualización automática del README.md y la carpeta /docs mediante el workflow.

e) Control de versiones

Ejemplo de mensajes de commit generados por el workflow:

    "Actualización automática de JSDoc"

    "Generación y publicación de documentación PDF"

    "Eliminación de versiones anteriores de documentación"

Estos mensajes son claros y descriptivos, indicando la acción realizada por el workflow.
f) Accesibilidad y seguridad

    El repositorio puede configurarse como privado.

    Se pueden definir equipos y roles para controlar el acceso.

    Uso de claves/secretos para operaciones sensibles en el workflow.

    Protección de ramas para evitar cambios no autorizados.

g) Instalación/uso documentados

En el README.md se explica el funcionamiento del workflow y se detallan las herramientas y comandos utilizados para la generación de documentación.
h) Integración continua

El workflow es de integración continua porque se ejecuta automáticamente tras cada push al repositorio, manteniendo la documentación siempre actualizada.
El evento on: push es el que dispara la generación y actualización de la documentación.
