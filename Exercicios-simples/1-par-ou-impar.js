/*
Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
*/

const prompt = require('prompt-sync')()

let client_number = parseFloat(prompt(`Enter an integer and find out whether it is even or odd: `))

if (client_number % 2 == 0) {
    console.log(`${client_number} is even`)
} else {
    console.log(`${client_number} is odd`)
}