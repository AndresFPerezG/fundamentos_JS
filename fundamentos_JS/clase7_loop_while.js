var andres = {
    nombre: 'Andrés',
    apellido: 'Pérez',
    edad: 32,
    peso: 80
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 18,
    peso: 70
}

console.log(`Al inicio del año ${andres.nombre} pesaba ${andres.peso} kg`)
//console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso} kg`)

//Se establece que cada que incrementa o adelgaza será con un valor fijo de 0.2g
const INCREMENTA_DECREMENTA_PESO = 0.3
const DIAS_DEL_AÑO = 365
const META_ANDRES = andres.peso - 3
const META_JUAN = juan.peso - 2
var dias = 0

//arrow function
const aumentarDePeso = persona => persona.peso += INCREMENTA_DECREMENTA_PESO
const adelgazar = persona => persona.peso -= INCREMENTA_DECREMENTA_PESO
const come = () => Math.random() < 0.3 // no recibe ningún parámetro
const deporte = () => Math.random() < 0.4

while (andres.peso > META_ANDRES){

    if(come()){
        aumentarDePeso(andres)
    }
    if(deporte()){
        adelgazar(andres)
    }

    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${andres.nombre} adelgazó  3kg peso actual: ${andres.peso.toFixed(1)}`) //.toFixed(1) arroja solo un decimales
//console.log(`Al final del año ${juan.nombre} pesa ${juan.peso.toFixed(1)} kg`)