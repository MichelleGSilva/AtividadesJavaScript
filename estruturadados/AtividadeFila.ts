import readlineSync = require("readline-sync")

import { Queue } from "./Queue"

const filaClientes = new Queue<string>()
let opcao: number

do {
 console.log("\n++++++++++++++++Menu++++++++++++++++++")   
 console.log("1 - Adicionar Cliente na Fila")
 console.log("2 - Listar todos os Clientes")
 console.log("3 - Retirar Cliente da Fila")
 console.log("0 - Sair")
 console.log ("======================")

opcao = readlineSync.questionInt("\nDigite uma opção: ")

 switch (opcao) {
    case 1:
      const nome = readlineSync.question("\nDigite o nome do Cliente: ")
      filaClientes.enqueue(nome)

      console.log("\nFila:\n");
        filaClientes.printQueue()

      console.log("\nCliente Adicionado!")
      break

    case 2: 
    if (filaClientes.isEmpty()) {
        console.log("\nA Fila está vazia!")
      } else {
        console.log("\nLista de Clientes na Fila:\n")
        filaClientes.printQueue()
      }
      break

    case 3:
      if (filaClientes.isEmpty()) {
        console.log("\nA Fila está vazia!")
      } else {
        filaClientes.dequeue()
        console.log("\nFila:\n")
        filaClientes.printQueue()
        console.log("\nO Cliente foi Chamado!")
      }
      break

      case 0:
      console.log("\nPrograma Finalizado!")
      break

    default:
      console.log("\nOpção inválida! Tente novamente.")
      break
  }
} while (opcao !== 0)
