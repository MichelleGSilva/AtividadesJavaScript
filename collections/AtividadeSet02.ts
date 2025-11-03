import readlineSync = require("readline-sync")

let setnumeros: Set<number> = new Set<number>()

for (let indice = 0; indice <10; indice++) {
    const numero = readlineSync.questionFloat(`\nDigite o ${indice + 1}º número: `)
   setnumeros.add(numero)
}

let numerosOrdenados = Array.from(setnumeros).sort((a, b) => a - b)

console.log("\nListar dados do Set:")
numerosOrdenados.forEach(num => console.log(num))