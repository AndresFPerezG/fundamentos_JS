//La memorización es una técnica de programación que nos permite ahorrar cómputo o procesamiento en JavaScript, al ir almacenando el resultado invariable de una función para que no sea necesario volver a ejecutar todas las instrucciones de nuevo, cuando se vuelva a llamar con los mismos parámetros. Es similar a usar memoria cache.

function crearSaludo(finalDeFrase){// Esta función trabaja como creadora de otras funciones
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('wey')
const saludoColombiano = crearSaludo('Tons qué')

saludoArgentino('Andrés')
saludoMexicano('Andrés')
saludoColombiano('Andrés')