/*
Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
*/

const prompt = require("prompt-sync")()

let num = parseFloat(prompt(`Digite um número que queira fazer a sua tabuada: `))

for (let i = 1; i <= 10; i ++) {
    console.log(`\n${num} x ${i} = ` + num * i)
}