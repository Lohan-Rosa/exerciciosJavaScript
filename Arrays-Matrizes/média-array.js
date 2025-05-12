const prompt = require("prompt-sync")()

let numeros = [21, 23, 1, 36, 89, 71, 3, 17, 95, 92]

let soma = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 0)

let media = soma / numeros.length

console.log(`${media}`)