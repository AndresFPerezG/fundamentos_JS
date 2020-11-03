var andres = {
    nombre: 'Andres',
    apellido: 'Perez',
    edad: 32
}

//var

/* function esMayorDeEdad(persona){

    if (persona.edad > 18) {
       var mensaje = 'Es mayor de edad'
    } else {
       var mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
} */

//let = El alcance de la variable se reduce al bloque donde esa variable es utilizada
/* function esMayorDeEdad(persona){

    let mensaje

    if (persona.edad > 18) {
        mensaje = 'Es mayor de edad'
    } else {
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
} */

//const = son variables constantes, que no mutan
// En array se pueden agregar valores pero no se pueden reasignar valores diferentes para ese array
function esMayorDeEdad(persona){

    let mensaje
    const MAYORIA_DE_EDAD = 18

    if (persona.edad > MAYORIA_DE_EDAD) {
        mensaje = 'Es mayor de edad'
    } else {
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}


esMayorDeEdad(andres)