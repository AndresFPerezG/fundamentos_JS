//factorial es una multiplicación recursiva
// !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720

function factorial(n){
    //se crea una cache para almecenar los resultados
    if (!this.cache) {
        this.cache = {}
    }

    if(this.cache[n]){
        return this.cache[n]
    }

    if (n === 1) {
        return 1
    }

    this.cache[n] = n * factorial (n - 1)
    return this.cache[n]
}