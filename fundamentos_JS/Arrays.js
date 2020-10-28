function per(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

var andres = new per('Andrés', 'Pérez', 1.81)
var carlos = new per('Carlos', 'Gomez', 1.76)
var javier = new per('Javier', 'Urrego', 1.77)
var clara = new per('Clara', 'Goez', 1.65)
var marisol = new per('Marisol', 'Rodriguez', 1.67)
var heidy = new per('Heidy', 'Mejia', 1.69)

var personas = [andres, carlos, javier, clara, marisol, heidy]

const esAlta = ({altura}) => altura > 1.70
const esBaja = ({altura}) => altura < 1.70

var personasAltas = personas.filter(esAlta) //función FILTER itera los elementos buscando el parámetro que uno le pase
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)

/* NOTA: Esto crea un nuevo array con los valores modificados y 
el array original queda intacto, si no se hace así, se cambian 
los valores del array original también.
como solo se retorna un objeto no es necesario poner la palabra return 
pero hay que embolver las llaves del objeto entre parentesis.*/

//MAP siempre devuelve un nuevo array

const alturaACms = persona => ({ 
  ...persona,
        altura: persona.altura * 100
})

var alturaEnCms = personas.map(alturaACms)

console.log(alturaEnCms)

/*
//acceder a un elemento del array
personas[2]
//resultado: objeto de javier

//acceder a el atributo de un objeto del array
personas[0].altura
//O también de la siguiente manera
personas[0]['altura']
//resultado
// 1.81
*/

//recorrer el array e imprimir la estatura de cada uno
/*
for(var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}
*/


