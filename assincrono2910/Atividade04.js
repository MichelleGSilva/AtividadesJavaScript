const leia = require('readline-sync')

console.log("Calcule a diferença do produto dos dois primeiros números e dos dois últimos números.\n")

// Variaveis Declaradas
let num1, num2, num3, num4, diferenca

// Entrada de Dados
num1 = leia.questionFloat("Digite o primeiro número: ")
num2 = leia.questionFloat("Digite o segundo número: ")
num3 = leia.questionFloat("Digite o terceiro número: ")
num4 = leia.questionFloat("Digite o quarto número: ")

// Processamento
diferenca = (num1 * num2) - (num3 * num4)

// Saida de Dados
console.log("\nA diferença entre a multiplicação dos dois primeiros números e a multiplicação dos dois últimos números é igual a: " + diferenca.toFixed(1))