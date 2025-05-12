const prompt = require("prompt-sync")()

const numeros = [21, 23, 1, 36, 89, 71, 3, 17, 95, 92]

for (let i =  0; i < numeros.length; i++) {

    for (let j = 0; j < numeros.length - i; j++) {

        if (numeros[j] > numeros[j + 1]) {
            const temp = numeros[j]
            numeros[j] = numeros[j + 1]
            numeros[j + 1] = temp
        }
    }
}

console.table(numeros)