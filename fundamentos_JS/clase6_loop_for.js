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

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso} kg`)
console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso} kg`)

//Se establece que cada que incrementa o adelgaza será con un valor fijo de 0.2g
const INCREMENTA_DECREMENTA_PESO = 0.2
const DIAS_DEL_AÑO = 365

//arrow function
const aumentarDePeso = persona => persona.peso += INCREMENTA_DECREMENTA_PESO
const adelgazar = persona => persona.peso -= INCREMENTA_DECREMENTA_PESO


for(var i = 1; i <= DIAS_DEL_AÑO; i++){
    var random = Math.random() //retorna valores random entre 0 sin ser cero y 1 sin ser uno (0.256999, 0.122355000 0.9852144)
    var random2 = Math.random() //random para generar numeros para andres y random2 para juan

    if (random < 0.25){
        //aumenta de peso
        aumentarDePeso(andres)

    }else if (random < 0.5) {
        //adelgaza
        adelgazar(andres)
    }

    if (random2 < 0.25){
        //aumenta de peso
        aumentarDePeso(juan)

    }else if (random2 < 0.5) {
        //adelgaza
        adelgazar(juan)
    }
}

console.log(`Al final del año ${andres.nombre} pesa ${andres.peso.toFixed(1)} kg`) //.toFixed(1) arroja solo un decimales
console.log(`Al final del año ${juan.nombre} pesa ${juan.peso.toFixed(1)} kg`)

