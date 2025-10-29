// Importando a biblioteca
const leia = require('readline-sync')

//Variaveis
let salario = 10000.00
let abono = 1000.00
let novoSalario = salario + abono

//Entrada de Dados
console.log("Digite o seu salário: ")
salario = leia.questionFloat()

console.log("\nDigite o seu abono: ")
abono = leia.questionFloat()

//Processamento
novoSalario = salario + abono

//Saida de Dados
console.log("\nNovo Salário: R$ " + novoSalario.toFixed(2))