const andres = {
    nombre: 'Andrés',
    apellido: 'Pérez',
    edad: 32
}

//esta función genera un "efecto de lado" que cambia el elemento original con su ejecución (no es nada recomendable)
//const cumpleaños = persona => persona.edad ++

//Esta función crea otro objeto nuevo al clual si le cambia el valor dejando el objeto original intacto (recomendado)
const cumpleañosInmutable = persona => ({
    ...persona, //copia los atributos del obj original y le cambia el atributo edad
    edad: persona.edad + 1
})