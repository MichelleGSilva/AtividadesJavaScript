const leia = require("readline-sync")

let codigo, quantidade

codigo = leia.questionInt("Digite o código do produto (1 a 6): ")
quantidade = leia.questionInt("Digite a quantidade comprada: ")

let produto
let precoUnitario
let total

switch (codigo) {
    case 1: 
        produto = "Cachorro Quente"
        precoUnitario = 10.00
        total = quantidade * precoUnitario
        console.log("Produto: " + produto)
        console.log("Valor total: R$ " + total.toFixed(2))
        break

    case 2: 
        produto = "X-Salada"
        precoUnitario = 15.00
        total = quantidade * precoUnitario
        console.log("Produto: " + produto)
        console.log("Valor total: R$ " + total.toFixed(2))
        break

    case 3: 
        produto = "X-Bacon"
        precoUnitario = 18.00
        total = quantidade * precoUnitario
        console.log("Produto: " + produto)
        console.log("Valor total: R$ " + total.toFixed(2))
        break

    case 4: 
        produto = "Bauru"
        precoUnitario = 12.00
        total = quantidade * precoUnitario
        console.log("Produto: " + produto)
        console.log("Valor total: R$ " + total.toFixed(2))
        break

    case 5: 
        produto = "Refrigerante"
        precoUnitario = 8.00
        total = quantidade * precoUnitario
        console.log("Produto: " + produto)
        console.log("Valor total: R$ " + total.toFixed(2))
        break

    case 6: 
        produto = "Suco de laranja"
        precoUnitario = 13.00
        total = quantidade * precoUnitario
        console.log("Produto: " + produto)
        console.log("Valor total: R$ " + total.toFixed(2))
        break

    default:
        console.log("Código Inválido! Escolha um número entre 1 e 6.")
        break
}