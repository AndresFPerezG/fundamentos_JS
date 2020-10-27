//objetos

var andres = {
    nombre: 'Andrés',
    apellido: 'Pérez',
    edad: 32
}

var carlos = {
    nombre: 'Carlos',
    apellido: 'Rodriguez',
    edad: 28
}

function nombreEnMayuscula(persona){
    console.log( persona.nombre.toUpperCase() )
}

/*function nombreEnMayuscula({ nombre }){   //este caso también es valido, 
    console.log( nombre.toUpperCase() ) //se pasa como parámetro el atributo del objeto que queremos imprimir
}*/

nombreEnMayuscula(andres)
nombreEnMayuscula(carlos)
nombreEnMayuscula({ nombre: 'pepito' }) // Se puede crear un nuevo abjeto directamente pasandolo como parámetro de la función

//opción 1
function nombreEdad(persona){
    console.log('Hola soy ' + persona.nombre + ' y tengo ' + persona.edad + ' años')
}

//opción 2
function nombreEdad(persona){
    console.log(`Hola soy ${persona.nombre} y tengo ${persona.edad} años`)
}

nombreEdad(andres)
nombreEdad(carlos)

//función que le suma años a una persona

//opción 1
function cumpleaños(persona){
    persona.edad += 1
}

cumpleaños(andres)
//resultado edad: 33

//opción 2
//esta función crea un nuevo objeto al cual se le agrega un año, el objeto original queda intacto
function cumpleaños(persona){
    return{
        ...persona, // ( ... ) crea un objeto nuevo el cual vamos a modificar
        edad: persona.edad + 1
    }
}

var andresMasViejo = cumpleaños(andres)
//resultado edad: 33