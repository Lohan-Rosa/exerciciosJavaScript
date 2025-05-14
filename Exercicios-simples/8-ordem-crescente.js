/*
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

const prompt = require("prompt-sync")()

let valor_1 = parseInt(prompt(`Digite o primeiro valor: `))
let valor_2 = parseInt(prompt(`Digite o segundo valor: `))

if (valor_1 > valor_2) {
    console.log(`\n${valor_1}, ${valor_2}`)

} else if (valor_2 > valor_1) {
    console.log(`\n${valor_2}, ${valor_1}`)

} else {
    console.log(`\nOs valores são iguais!`)

}