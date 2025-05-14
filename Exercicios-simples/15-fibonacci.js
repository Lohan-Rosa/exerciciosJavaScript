/*
Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/

const prompt = require("prompt-sync")()

let num = 0, b = 1

for (let i = 0; i < 10; i++) {
    console.log(`${num}`)
    let prox = num + b
    num = b
    b = prox
}