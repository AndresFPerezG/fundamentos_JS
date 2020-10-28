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

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)

const alturaACms = persona => ({ 
  ...persona,
        altura: persona.altura * 100
})

var alturaEnCms = personas.map(alturaACms)

console.log(alturaEnCms)