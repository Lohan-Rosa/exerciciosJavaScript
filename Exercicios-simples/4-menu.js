const prompt = require("prompt-sync")()


console.log(`
Digite 1 se deseja comprar um folhado
Digite 2 se deseja comprar uma torta
Digite 3 se deseja comprar um cachorro quente
`)

let choice = parseFloat(prompt(`Digite a opção que deseja: `))

    switch (choice) {
        case 1:
            console.log(`\nVocê comprou um folhado, obrigado pela compra!\n`)    

        case 2:
            console.log(`\nVocê comprou uma torta, obrigado pela compra!\n`)    

        case 3:
            console.log(`\nVocê comprou um cachoro quente, obrigado pela compra!\n`)    

        break;

        default:
            console.log(`\nOpção inválida, tente novamente mais tarde!\n`)    
    }