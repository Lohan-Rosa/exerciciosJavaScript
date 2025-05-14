const prompt = require("prompt-sync")()

const exercicioArray = (arrayTeste) => {
    arrayTeste.sort((a, b) => a - b)

    return arrayTeste
}

console.log(exercicioArray([12, 64, 46, 32, 1]))