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

const MAYORIA_DE_EDAD = 18 // Es una buena practica poner las variables constantes en mayusculas y separadas por guión bajo

//Se cambia a const para identificar que es una función y no confundirla con una variable
//Función anónima (sin nombre) se asigna a una variable
/* 
const esMayorDeEdad = function (persona){  
    return persona.edad >= MAYORIA_DE_EDAD
}
*/

//Arrow function
//se borra la palabra function y despues del parámetro se pone una flecha (equivalente a función anónima)
//cuando se tiene un solo parámetro se pueden quitar los paréntesis
//si se retorna un valor se puede borrar el RETURN y las {} 
//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

//Desestructuración del parámetro
//se pasa como parámetro el atributo que queremos consultar y retornamos si la edad es mayor o igual a MAYORIA_DE_EDAD
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} tiene ${persona.edad} por tanto es mayor de edad`)
    }else{
        console.log(`${persona.nombre} tiene ${persona.edad} por tanto es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(andres)
imprimirSiEsMayorDeEdad(juan)

/*function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}*/

//Ejecicio con arrow function
const permitirAcceso = ({ edad }) => !esMayorDeEdad({ edad }) ? console.log( `Acceso Denegado`): console.log(`Puede seguir`)

permitirAcceso(juan)
permitirAcceso(andres)