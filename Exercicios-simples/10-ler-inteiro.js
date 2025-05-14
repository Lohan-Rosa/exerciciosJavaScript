/*
Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

const prompt = require("prompt-sync")()

let num_inteiro = parseInt(prompt(`Digite um numero inteiro: `))

for (let i = 1; i <= 10; i ++) {
    console.log(`\n${i} - ${num_inteiro}`)
}