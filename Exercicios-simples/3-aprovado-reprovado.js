/*
Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

const prompt = require("prompt-sync")()

let nota = parseFloat(prompt(`Digite a nota de 0 a 10: `))

    if (nota >= 7) {
        console.log(`\nSua nota é ${nota}, você está aprovado!\n`)

    } else if (nota >= 6 && nota < 7) {
        console.log(`\nSua nota é ${nota}, você ficou de recuperação!\n`)

    } else {
        console.log(`\nSua nota é ${nota}, você foi reprovado!\n`)

    }