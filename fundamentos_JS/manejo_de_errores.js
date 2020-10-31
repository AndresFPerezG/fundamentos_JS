const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opciones = { crossDomain: true }

function obtenerPersonaje (id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` //.replace, reemplaza strings, en este caso el :id de la variable PEOPLE_URL por el id que pasemos por medio de la función

    //Hacer un request con JQuery ($.get()) -> traer algo de la API con JQuery
    $.get( url, opciones, callback ).fail(function (){ //esto se ejecuta en caso de irse la conexión en medio de la ejecución sale este error
        console.log(`sucedió un error, no se obtuvo el personaje ${id}`)
    })

}

//asincronismo es que vamos a llamar un método o multiplos pero no sabemos en que orden llegarán las respuestas, eso depende del servidor
obtenerPersonaje(1, function (character){
    console.log(`Hola, yo soy ${character.name}`)

    obtenerPersonaje(4, function (character){
        console.log(`Hola, yo soy ${character.name}`)

        obtenerPersonaje(10, function (character){
            console.log(`Hola, yo soy ${character.name}`)

            obtenerPersonaje(20, function(character){
                console.log(`Hola, yo soy ${character.name}`)
            })
                
        })
    })
})