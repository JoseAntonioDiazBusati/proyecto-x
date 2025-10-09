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