const leia = require("readline-sync")

let saldo = 1000.00

let operacao = leia.questionInt("Digite o código da operação (1 - Saldo, 2 - Saque, 3 - Depósito): ")

switch (operacao) {
    case 1:
        console.log("Operação - Saldo")
        console.log("Saldo: R$" + saldo.toFixed(2))
        break

    case 2:
        let valorSaque = leia.questionFloat("Digite o valor do saque: ")
        console.log("Operação - Saque")
        if (valorSaque > saldo){
            console.log("Saldo Insuficiente!")
        } else {
            saldo = saldo - valorSaque
            console.log("Novo Saldo: R$" + saldo.toFixed(2))
            }
            break
s
    case 3:
        let valorDeposito = leia.questionFloat("Digite o valor do depósito: ")
        console.log("Operação - Depósito")
        saldo = saldo + valorDeposito
        console.log("Novo Saldo: R$" + saldo.toFixed(2))
        break

    default:
        console.log("Operação Inválida!")

}
