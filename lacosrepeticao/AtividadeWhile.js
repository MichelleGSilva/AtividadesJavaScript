const leia = require("readline-sync")

let continua = true;
let idade, genero, pessoaDesenvolvedora

let somaIdades = 0
let totalPessoas = 0
let totalBackend = 0
let totalMulherCisTransFrontend = 0
let totalHomensCisTransMobile40 = 0
let totalNaoBinariosFullStack30 = 0

while (continua) {
    idade = leia.questionInt("Digite a idade: ")

    console.log("\nIdentidade de Gênero: ")
    console.log("1 - Mulher Cis, 2 - Homem Cis, 3 - Não Binário, 4 - Mulher Trans, 5 - Homem Trans, 6 - Outros")
    genero = leia.questionInt("Escolha o número correspondente: ")

    console.log("\nTipo de Pessoa Desenvolvedora: ")
    console.log("1 - Backend, 2 - Frontend, 3 - Mobile, 4 - FullStack")
    pessoaDesenvolvedora = leia.questionInt("Escolha o número correspondente: ")

    somaIdades += idade
    totalPessoas++
    
    if (pessoaDesenvolvedora === 1) {
        totalBackend++
    }
    if ((genero === 1 || genero === 4) && pessoaDesenvolvedora ===2) {
        totalMulherCisTransFrontend++
    }
    if ((genero === 2 || genero === 5) && pessoaDesenvolvedora === 3 && idade > 40) {
        totalHomensCisTransMobile40++
    }
    if (genero === 3 && pessoaDesenvolvedora === 4 && idade < 30) {
        totalNaoBinariosFullStack30++
    }

    continua = leia.keyInYNStrict("\nDeseja cadastrar outro colaborador? ")

    let mediaIdade = somaIdades / totalPessoas

    console.log("\n++++++++++++++++Resultados da Pesquisa++++++++++++++++++")
    console.log("Total de pessoas desenvolvedoras Backend: " + totalBackend)
    console.log("Total de Mulheres Cis e Trans desenvolvedoras Frontend: " + totalMulherCisTransFrontend)
    console.log("Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: " + totalHomensCisTransMobile40)
    console.log("Total de Não Binários desenvolvedores FullStack menores de 30 anos: " + totalNaoBinariosFullStack30)
    console.log("O número total de pessoas que responderam à pesquisa: " + totalPessoas)
    console.log("A média de idade das pessoas que responderam à pesquisa: " + mediaIdade.toFixed(2))
}
