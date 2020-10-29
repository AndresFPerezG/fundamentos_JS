class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    } 
    saludar(fn){ // Función vaciá solo para validar la función de responder saludo
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }
    soyAlto(){
        this.altura > 1.80 ? console.log(`${this.nombre} es alto/a`) : console.log(`${this.nombre} es bajo/a`)
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if(fn){
            fn(nombre, apellido, true) //true porque se valida que sea un desarrollador
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev){
        console.log(`Ah que bueno que eres Desarrollador`)
    }
}

var andres = new Desarrollador('Andrés', 'Pérez', 1.81)
var carlos = new Persona('Carlos', 'Gomez', 1.86)
var margarita = new Persona('Margarita', 'Marín', 1.50)

andres.saludar(responderSaludo)
carlos.saludar(responderSaludo)
margarita.saludar(responderSaludo)