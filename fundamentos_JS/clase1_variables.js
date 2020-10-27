var nombre = "Andrés";
var apellido = "Pérez";
var edad = 32;
var peso = 80;


//*-Código para mostrar el ultimo caracter del nombre del usuario-*//

/*

var nombreUsuario = 'Andres'

var letrasDelUsuario = nombreUsuario.charAt(nombreUsuario.length -1)

alert(letrasDelUsuario)

*/


//strings

var nombreEnMayusculas = nombre.toUpperCase(); // convertir a mayusculas

var apellidoMinuscula = apellido.toLowerCase(); // convertir a minusculas

var primeraLetraDelNombre = nombre.charAt(0); // saber primer caracter de un string, como parametro le debemos dar la posición del caracter que queremos ver.

var cantidadDeLetrasDelNombre = nombre.length; // saber la cantidad de letras de un string .length es un atributo, no una función

var nombreCompleto = nombre + ' ' + apellido //concatenar dos variables con un espacio

var concatenarNombre = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`; //con comillas invertidas `` podemos interpolar strings y podemos agregarle funciones por medio de la interpolación

var subString = nombre.charAt(1) + nombre.charAt(3) //Se accede unicamente a las letras indicadas por su index

var subStr = nombre.substr(0, 3) // Se accede a las letras indicadas pero con la función SUBSTR(lleva dos parametros desde que letra a que letra queremos mostrar)

// Números y operadores

//incremento - decrementos
edad += 1

peso -= 2

var sanduche = 1
var jugarFutbol = 3
var precioVino = 200.3

peso += sanduche
peso -= jugarFutbol

//comprar 3 vinos
var total = precioVino * 3
//resultado es 600.90000000001

//para que sea más preciso en decimales hacemos lo siguiente:
var totalPreciso = precioVino * 100 * 3 / 100

// O tambien por medio de la función Math()
var total = Math.round(precioVino * 100 * 3) / 100
//resultado 600.9

var totalstr = total.toFixed(2) //para tener en cuenta 2 o más decimales pero los convierte en un string
//resultado 600.90

//se convierte el string de totalstr a float con los decimales configurados en ./*toFixed
var total2 = parseFloat(totalstr)



