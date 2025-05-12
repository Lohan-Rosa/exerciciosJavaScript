/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
*/

const prompt = require("prompt-sync")()

let lado_a = parseFloat(prompt(`Digite o valor do primeiro lado do triângulo: `))
let lado_b = parseFloat(prompt(`Digite o valor do segundo lado do triângulo: `))
let lado_c = parseFloat(prompt(`Digite o valor do terceiro lado do triângulo: `))

if (lado_a == lado_b && lado_b == lado_c) {
    console.log(`\nÉ um triângulo Equilátero`)

} else if (lado_a != lado_b && lado_b != lado_c) {
    console.log(`\nÉ um triângulo Escaleno`)

} else {
    console.log(`\nÉ um triângulo Isósceles`)

}