
/*PROTOTYPE: es un objeto que almacena todas las funciones que hemos creado, asi como la función constructora*/

//Metodo de herencia en JS usado anteriormente
/*
function heredaDe (prototipoHijo, prototipoPadre){
    var fn = function () {} // esta función no hace nada y por convención se nombre con (fn) o con (noop)
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn 
    prototipoHijo.prototype.constructor = prototipoHijo
}
*/

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
} 

function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona) // mecanismo de herencia

//las funciones de los prototipos deben estar antes de llamarlas, de lo contrario retorna error
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
    this.altura > 1.80 ? console.log(`${this.nombre} es alto/a`) : console.log(`${this.nombre} es bajo/a`)
}

Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

var andres = new Desarrollador('Andrés', 'Pérez', 1.81)
var carlos = new Persona('Carlos', 'Gomez', 1.86)
var margarita = new Persona('Margarita', 'Marín', 1.50)

/*
andres.soyAlto()
carlos.soyAlto()
margarita.soyAlto()
andres.saludar()
*/


