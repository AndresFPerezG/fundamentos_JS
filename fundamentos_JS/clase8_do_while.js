var contador = 0

const llueve = () => Math.random() < 0.25

//do while ejecuta mínimo 1 vez el código
do{
    contador ++
}while(!llueve()) //si no llueve se va a ejecutar de nuevo el programa

if(contador === 1){
    console.log(`Fuí a ver si llavía, solo fué ${contador} vez`)
}else
console.log(`Fuí a ver si llavía y fueron ${contador} veces`)