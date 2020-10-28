function per(nombre, apellido, altura, cantidadDeLibros){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    this.cantidadDeLibros = cantidadDeLibros
}

var andres = new per('Andrés', 'Pérez', 1.81, 110)
var carlos = new per('Carlos', 'Gomez', 1.76, 80)
var javier = new per('Javier', 'Urrego', 1.77, 76)
var clara = new per('Clara', 'Goez', 1.65, 52)
var marisol = new per('Marisol', 'Rodriguez', 1.67, 12)
var heidy = new per('Heidy', 'Mejia', 1.69, 200)

var personas = [andres, carlos, javier, clara, marisol, heidy]

/***-----------------------------------------------------------***/

/* OPCIÓN 1
var acumulador = 0

for (var i = 0; i < personas.length; i++){
  acumulador = acumulador + personas[i].cantidadDeLibros
}
*/

/***-----------------------------------------------------------***/

/* OPCIÓN 2 - REDUCE()
El método reduce() nos permite reducir, mediante una función que se 
aplica a cada uno de los elemento del array, todos los elementos de dicho array, a un valor único.*/

const reducer = (acumulador, { cantidadDeLibros }) => acumulador + cantidadDeLibros

//primer parámetro una función y el segundo el número donde empieza el acumulador
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)
