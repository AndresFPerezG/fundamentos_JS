//saber años de vida y dias desde que se nació


//Math.abs convierte en número absoluto el resultado, si sale un número negativo, lo convierte a positivo, si es positivo lo deja como está. Se representa en milisegundos.
function diasEntreFechas(fecha1, fecha2){
    const unDia = 1000 * 60 * 60 * 24 //milisegundos en un día
    const diferencia = Math.abs(fecha1 - fecha2)

    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1988, 9, 19) //los meses en JS se cuentan desde cero (Enero = 0, fecbrero = 1, etc.)

console.log(`Días actual: ${hoy}`)

console.log(`Día que nací: ${nacimiento}`)

resultado = diasEntreFechas(hoy, nacimiento)

console.log(`Días que han pasado desde que nací: ${resultado}`)

console.log(`Meses que han pasado desde que nací: ${Math.floor(resultado/30)}`)

console.log(`Años que han pasado desde que nací: ${Math.floor(resultado/365)}`)


