/*
Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
*/

const prompt = require("prompt-sync")()

let num = parseFloat(prompt(`Digite um numero para saber o seu fatorial: `))
let fatorial = 1

for (let i = num; i >= 1; i--) {
    fatorial *= i
    console.log(`\n${num}! x ${i} = ${fatorial}`)
}