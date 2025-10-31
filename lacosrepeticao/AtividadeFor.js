const leia = require("readline-sync")

let num1, num2

num1 = leia.questionInt("Digite o primeiro número do intervalo: ")
num2 = leia.questionInt("Digite o segundo número do intervalo: ")


if (num1 >= num2) {
    console.log("Intervalo Inválido")
    }else{
    console.log(`\nNo intervalo entre ${num1} e ${num2}:`)

for (let contador = num1; contador <= num2; contador++) {
  if (contador % 3 === 0 && contador % 5 === 0) {
    console.log(`${contador} é múltiplo de 3 e 5`);
    } 
   }
  } 