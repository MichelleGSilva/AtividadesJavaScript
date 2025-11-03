import readlineSync = require("readline-sync")

let numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let numeroDigitado = readlineSync.questionInt("\nDigite o número que você deseja encontrar: ")

if (numeros.has (numeroDigitado)){
    console.log(` O número ${numeroDigitado} foi encontrado!`)
} else {
   console.log(` O número ${numeroDigitado} não foi encontrado!`)
}