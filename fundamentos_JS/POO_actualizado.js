class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    } 
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        this.altura > 1.80 ? console.log(`${this.nombre} es alto/a`) : console.log(`${this.nombre} es bajo/a`)
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}

var andres = new Desarrollador('Andrés', 'Pérez', 1.81)
var carlos = new Persona('Carlos', 'Gomez', 1.86)
var margarita = new Persona('Margarita', 'Marín', 1.50)