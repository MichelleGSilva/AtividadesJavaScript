// Importando a biblioteca
const leia = require('readline-sync')

// Variaveis
let nota1 = 10.0
let nota2 = 8.0
let nota3 = 7.0
let nota4 = 7.5
let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4

// Entrada de Dados
console.log("Digite a primeira nota: ")
nota1 = leia.questionFloat()

console.log("\nDigite a segunda nota: ")
nota2 = leia.questionFloat()

console.log("\nDigite a terceira nota: ")
nota3 = leia.questionFloat()

console.log("\nDigite a quarta nota: ")
nota4 = leia.questionFloat()

// Saida de Dados
console.log("A Média Final é: " + mediaFinal.toFixed (1))
