const prompt = require("prompt-sync")()

const numeros = [21, 23, 1, 36, 89, 71, 3, 17, 95, 92]

numeros.sort((a, b) => {
    return a - b
})

const soma = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 0)

const media = soma / numeros.length

const pares = numeros.filter(numeros => numeros % 2 === 0)

console.log(`Números do array: ${numeros}`)
console.log(`Soma dos valores dentro do array: ${soma}`)
console.log(`Média aritmética dos valores dentro do array: ${media}`)
console.log(`Números pares do array: ${pares}`)