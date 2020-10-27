//se inicializan dos variables en una sola linea
var nombre = 'Andrés', edad = 32

function imprimirEdad(nom, ed){
    console.log(`${nom} tiene ${ed} años`)
}

/*
imprimirEdad(nombre, edad)
imprimirEdad('Felipe', 30)
imprimirEdad('Vicky', 18)
imprimirEdad('Carlos', 25)
imprimirEdad('Miguel', 28)
*/

//Alcance de las funciones

function nombreEnMayuscula(n){
    n = n.toUpperCase()
    console.log(n)
}

nombreEnMayuscula(nombre)