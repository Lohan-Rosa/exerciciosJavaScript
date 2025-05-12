/*
Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

const prompt = require("prompt-sync")()

let peso = parseFloat(prompt(`Digite o seu peso em kg's: `))
let altura = parseFloat(prompt(`Digite a sua altura em metros (1.75): `))

let imc = (peso) / (altura * altura)

console.log(`
Seu peso: ${peso}Kg
Sua altura: ${altura}m
Seu imc: ${imc.toFixed(2)}
`)