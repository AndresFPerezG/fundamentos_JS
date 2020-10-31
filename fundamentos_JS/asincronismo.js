//callbacks
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opciones = { crossDomain: true }
const onPeopleResponse = function (character) { console.log(`Hola, yo soy ${character.name}`) }

function obtenerPersonaje (id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` //.replace, reemplaza strings, en este caso el :id de la variable PEOPLE_URL por el id que pasemos por medio de la función

    //Hacer un request con JQuery ($.get()) -> traer algo de la API con JQuery
    $.get( url, opciones, onPeopleResponse) 
}

//asincronismo es que vamos a llamar un método o multiplos pero no sabemos en que orden llegarán las respuestas, eso depende del servidor
obtenerPersonaje(1)
obtenerPersonaje(4)
obtenerPersonaje(10)
obtenerPersonaje(20)



