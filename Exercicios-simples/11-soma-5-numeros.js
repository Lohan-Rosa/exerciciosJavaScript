/*
Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
*/

const prompt = require("prompt-sync")()

let soma_total = 0

for (let i = 1; i <= 5; i ++) {
    let num = parseFloat(prompt(`Digite um número: `))
    soma_total += num

    console.log(`A soma total é de: ${soma_total} em ${i} vezes`)
}