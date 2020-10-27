var andres = {
    nombre: 'Andrés',
    apellido: 'Pérez',
    edad: 32,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    guitarrista: false,
    dj: false,
    drone: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

// Condicionales

function profesiones(persona){
    console.log(`${persona.nombre} es: `)

    if (persona.ingeniero){ //por defecto la sentencia es true, sería igual a (persona.ingeniero === true)
        console.log('Ingeriero')
    }else {
        console.log('No es ingeniero')
    }

    if (persona.cocinero){
        console.log('cocinero')
    }

    if (persona.cantante){
        console.log('cantante')
    }

    if (persona.guitarrista){
        console.log('guitarrista')
    }

    if (persona.dj){
        console.log('dj')
    }

    if (persona.drone){
        console.log('Piloto de drone')
    }
}

profesiones(andres)

//resultado: 
// Andrés es: Ingeniero Piloto de drone

//Ejercicio: hacer una función que imprima si una persona es mayor o menor de edad

//opción 1
function imprimirSiEsMayorDeEdad(persona){
    if (persona.edad >= 18){
        console.log(`${persona.nombre} tiene ${persona.edad} por tanto es mayor de edad`)
    }else{
        console.log(`${persona.nombre} tiene ${persona.edad} por tanto es menor de edad`)
    }
}

//Opción 2 (recomendada)
const MAYORIA_DE_EDAD = 18 // Es una buena practica poner las variables constantes en mayusculas y separadas por guión bajo

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} tiene ${persona.edad} por tanto es mayor de edad`)
    }else{
        console.log(`${persona.nombre} tiene ${persona.edad} por tanto es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(andres)
imprimirSiEsMayorDeEdad(juan)