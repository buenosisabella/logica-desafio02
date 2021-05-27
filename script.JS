let idade = 16
const isHuman = true
const aniversario = "setembro"
const nome = "Isabella"
const sobrenome = "Bueno"


if (idade >= 18){
    console.log("Sua idade é maior de 18 anos.")
} else{
    console.log("sinto muito informar, mais você não e maior de idade.")
}

if ((idade >= 18) && (isHuman == true)){
    console.log("Sua idade é maior de 18 anos e você não é humano.")
} else{
    console.log("sua idade nao bate e você é humano.")
}

if((aniversario == "Janeiro") || (aniversario == "Dezembro")){
    console.log("Você faz aniversário em Janeiro ou em Dezembro")
} else{
    console.log("Você não faz aniversário em Janeiro ou em Dezembro")
}

if(nome.substring(0,1) == "R"){
    console.log("Seu nome começa com a letra 'R'.")
} else{
    console.log("Seu nome não começa com a letra 'R'.")
}

if((sobrenome.length > 6) || (nome.substring(0,1) == "E")){
    console.log("Seu sobrenome tem mais de seis letras ou o seu sobrenome começa com a letra 'E'.")
} else{
    console.log("Seu sobrenome não tem mais de seis letras ou seu sobrenome não começa com a letra 'E'.")
}