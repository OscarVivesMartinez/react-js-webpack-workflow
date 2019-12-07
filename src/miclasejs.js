export default class miClase {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    muestraX() {
        console.log(this.x)
    }

    sumar(...valores) {
        let suma = 0
        for (let i in valores) {
            suma += valores[i]
        }
        return suma
    }
}