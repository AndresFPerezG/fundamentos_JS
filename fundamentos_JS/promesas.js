/* La promesa es un objeto de JS y se invoca de la siguiente forma:

new Promise( ( resolve, reject ) => {
    // --- llamado asíncrono
    if( todoOK ) {
       // -- se ejecutó el llamado exitosamente
       resolve()
    } else {
       // -- hubo un error en el llamado
       reject()
    }
  } )

  */

 const API_URL = 'https://swapi.dev/api/'
 const PEOPLE_URL = 'people/:id'
 const opciones = { crossDomain: true }
 
 function obtenerPersonaje (id){

    return new Promise( (resolve, reject ) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get( url, opciones, function (data) {
            resolve(data)
        })
        .fail(() => reject (id))
    })
 }
 
function onError(id){
    console.log(`Secedió un error al obtener el personaje ${id}`)
}

var ids = [1,2,3,4,5,6]

var promesas = ids.map( id => obtenerPersonaje(id) )

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

 /* obtenerPersonaje(1)
    .then( personaje1 => {
        console.log(`El personaje 1 ${personaje1.name}`) 
        return obtenerPersonaje(2)
    })
    .then( personaje2 => {
        console.log(`El personaje 2 ${personaje2.name}`) 
        return obtenerPersonaje(3)
    })
    .then( personaje3 => {
        console.log(`El personaje 3 ${personaje3.name}`) 
        return obtenerPersonaje(4)
    })
    .then( personaje4 => {
        console.log(`El personaje 4 ${personaje4.name}`) 
        return obtenerPersonaje(5)
    })
    .then( personaje5 => {
        console.log(`El personaje 5 ${personaje5.name}`) 
        return obtenerPersonaje(6)
    })
    .then( personaje6 => {
        console.log(`El personaje 6 ${personaje6.name}`)
    })
    .catch(onError)  */