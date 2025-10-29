// Importando a biblioteca
const leia = require('readline-sync')

//Variaveis
let salarioBruto = 2000.00
let adicionalNoturno = 500.00
let horasExtras = 100.00
let descontos = 200.00
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

// Entrada de Dados
console.log("Digite o seu salário bruto: ")
salarioBruto = leia.questionFloat()

console.log("\nDigite o seu adicional noturno: ")
adicionalNoturno = leia.questionFloat()

console.log("\nDigite as suas horas extras: ")
horasExtras = leia.questionFloat()

console.log("\nDigite os seus descontos: ")
descontos = leia.questionFloat()

// Saida de Dados
console.log("\nSalário Líquido: R$ " + salarioLiquido)