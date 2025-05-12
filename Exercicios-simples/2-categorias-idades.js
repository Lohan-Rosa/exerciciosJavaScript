/*
Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

const prompt = require("prompt-sync")()

let age = prompt(`Digite a idade e saiba em qual grupo você pertence: `)

    if (age <= 14) {
        console.log(`\nVocê tem ${age} anos, portanto, você pertence ao grupo 'CRIANÇA'\n`)

    } else if (age > 14 && age < 18) {
        console.log(`\nVocê tem ${age} anos, portanto, você pertence ao grupo 'ADOLESCENTE'\n`)

    } else if (age >= 18 && age < 60) {
        console.log(`\nVocê tem ${age} anos, portanto, você pertence ao grupo "ADULTO"\n`)

    } else {
        console.log(`\nVocê tem ${age} anos, portanto, você pertence ao grupo "IDOSO"\n`)
    }