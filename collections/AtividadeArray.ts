import readlineSync = require("readline-sync")

let cores: string [] = []

for (let indice = 0; indice <5; indice++) {
    const cor = readlineSync.question(`\nDigite a ${indice + 1}ª cor: `)
    cores.push(cor)
}

console.log("\nListar todas as cores:")
cores.forEach(cor => console.log(cor))

cores.sort()

console.log("\nOrdenar as cores:")
cores.forEach(cor => console.log(cor))







