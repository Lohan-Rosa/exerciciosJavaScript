const prompt = require("prompt-sync")()

let date = new Date()

console.log(date.getDate()) // Imprime o dia atual em number
console.log(date.getMonth() + 1) // Imprime o mês atual em number mas começa em 0
console.log(date.getFullYear()) // Imprime o ano atual em number
console.log(date.toString()) // Imprime a data e hora completa em string

let date1 = new Date(2025, 7, 5)
let date2 = new Date(2001, 15, 8)

console.log(date1.toString()) //
console.log(date2.toString()) //