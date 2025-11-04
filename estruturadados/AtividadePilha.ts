import readlineSync = require("readline-sync")

import { Stack } from "./Stack"

const pilhalivros = new Stack<string>()
let opcao: number

do {
 console.log("\n++++++++++++++++Menu++++++++++++++++++")   
 console.log("1 - Adicionar Livro na pilha")
 console.log("2 - Listar todos os Livros")
 console.log("3 - Retirar Livro da pilha")
 console.log("0 - Sair")
 console.log ("======================")

opcao = readlineSync.questionInt("\nDigite uma opção: ")

 switch (opcao) {
    case 1:
      const nome = readlineSync.question("\nDigite o nome do livro: ")
      pilhalivros.push(nome)

      console.log("\nPilha:\n")
        pilhalivros.printStack()

      console.log("\nLivro Adicionado!")
      break

    case 2: 
    if (pilhalivros.isEmpty()) {
        console.log("\nA Pilha está vazia!")
      } else {
        console.log("\nLista de Livros na Pilha:\n")
        pilhalivros.printStack()
      }
      break

    case 3:
      if (pilhalivros.isEmpty()) {
        console.log("\nA Pilha está vazia!")
      } else {
        pilhalivros.pop()
        console.log("\nPilha:\n")
        pilhalivros.printStack()
        console.log("\nUm Livro foi retirado da pilha!")
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

