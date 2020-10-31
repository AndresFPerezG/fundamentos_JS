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

async function obtenerPersonajes (){ //async await

    var ids = [1,2,3,4,5,6]
    var promesas = ids.map( id => obtenerPersonaje(id) )

    try{
        var personajes = await Promise.all(promesas)
        console.table(personajes)
    }catch (id) {
        onError(id)
    }
}

obtenerPersonajes()