/* División entera

    13 /_4___

    13 - 4 = 9    |
    9 - 4 = 5     |
    5 - 4 = 1     |
    1 - 4 = -3    0 -> no aplica, termina división
    
    resultado = 4/3 => 12 - sobra 1

*/

//esto hace lo mismo que el ejercicio de arriba
function divisionEntera(dividendo, divisor){
    if (dividendo < divisor){
        return 0
    }

    return 1 + divisionEntera (dividendo - divisor, divisor)
}