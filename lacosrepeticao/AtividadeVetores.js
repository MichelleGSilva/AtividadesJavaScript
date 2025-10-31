const leia = require("readline-sync")

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
let numero

let encontrado = false

console.log("Vetor:", vetor)

numero = leia.questionInt("Digite o número que você deseja encontrar: ")

for (let indice = 0; indice < vetor.length; indice++){
    if (vetor[indice] === numero){
        console.log(`O número ${numero} está localizado na posição: ${indice}`)
        encontrado = true
        break
    }
}

if (!encontrado) {
    console.log(`O número ${numero} não foi encontrado!`)
}
