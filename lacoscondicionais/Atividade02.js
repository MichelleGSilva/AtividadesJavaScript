const leia = require("readline-sync")

let nome, idade, primeiraDoacao

nome = leia.question("Digite o nome do doador: ")
idade = leia.questionInt("Digite a idade do doador: ")
primeiraDoacao = leia.keyInYNStrict("Primeira doação de sangue?: ")


if (idade >= 18 && idade <= 69){
   
    if (idade >= 60 && idade <= 69 && primeiraDoacao){
     console.log(nome + " não está apto(a) para doar sangue")
    }else{
    console.log(nome + " está apto(a) para doar sangue")
    }
}else{
    console.log(nome + " não está apto(a) para doar sangue")
}



