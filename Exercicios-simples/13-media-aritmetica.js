/*
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const prompt = require("prompt-sync")()

let num = 0
let cont = 0, soma = 0

do {
    num = parseFloat(prompt(`Digite um número decimal ou "0" para finalizar: `))

    if (num !== 0) {
        soma += num
        cont ++
    }

} while (num !== 0);

if (cont > 0) {
    let media = soma / cont
    console.log(`A média é: ${media}`)

} else {
    console.log(`Nenhum número foi digitado.`)
}