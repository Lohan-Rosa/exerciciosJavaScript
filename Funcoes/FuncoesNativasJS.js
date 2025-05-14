const prompt = require("prompt-sync")()

console.log("Lohan Rosa".length) // Ele conta espaços em branco
console.log("Lohan Rosa".charAt(0)) // Ele mostra o primeiro caracter
console.log("Lohan Rosa".indexOf('s')) // Ele busca a letra requerida e mostra a sua posição
console.log("Lohan Rosa".replace('Rosa', 'Ribeiro')) //Ele troca os parametros
console.log("Lohan Rosa".substr(7, 8)) // Começa pelo caracter 7 e mostra os 8 caracteres na sequencia
console.log("Lohan Rosa".toUpperCase()) // Coloca tudo em caixa alta
console.log("Lohan Rosa".toLowerCase()) // Coloca tudo em caixa baixa
console.log("-" + "Lohan".trim() +  "-") // Elimina os espaços em branco

console.log(Math.ceil(9.5)) // Arredondar um valor para cima
console.log(Math.floor(9.5)) // Arredondar um valor para baixo
console.log(Math.round(9.4)) // Arredonda para o mais próximo
console.log(Math.sqrt(81)) // Calcula a raiz quadrada do parametro
console.log(Math.pow(81, 2)) // Elevar um numero ao quadrado
console.log(Math.cbrt(81)) // Raiz cubica
console.log(Math.abs(81.23234)) // Transforma em valor absoluto
console.log(Math.random() * 100) // Gera um numero aleatorio entre 0 e 1