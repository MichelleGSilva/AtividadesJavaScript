const leia = require("readline-sync")

let A, B, C, soma

//Entrada de Dado
A = leia.questionInt("Digite o número A: ")
B = leia.questionInt("Digite o número B: ")
C = leia.questionInt("Digite o número C: ")

soma = A + B

if(soma > C){
    console.log("A Soma de A + B é Maior do que C")

}else if (soma < C){
    console.log("A Soma de A + B é Menor do que C")
}else{
    console.log("A Soma de A + B é Igual a C")
}