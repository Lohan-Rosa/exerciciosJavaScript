/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require("prompt-sync")()

let qtd_macas = prompt(`Digite a quantidade de maças que deseja: `)
let total = 0

if (qtd_macas < 12) {
    total = qtd_macas * 0.30
    console.log(`\nVocê comprou ${qtd_macas} maças e o total foi de R$${total.toFixed(2)}`)

} else {
    total = qtd_macas * 0.25
    console.log(`\nVocê comprou ${qtd_macas} maças e o total foi de R$${total.toFixed(2)}`)

}