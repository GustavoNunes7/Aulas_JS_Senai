//If/Else - Condicinais
//As estruturas condicionais permitem executar diferentes blocos de código dependendo da condição

//Exemplo 01
let idade= 18;
if (idade >= 18) {
    console.log("Você é maior de idade!");
} else{
    console.log("Você é menor de idade");
}

//Exemplo 02
let nota = 7;
if (nota >= 5){
    console.log("Aprovado! 🟢");
} else{
    console.log("Reprovado ❌");
}

//Exemplo 03
let senha = "1234";
//let senha = prompt("Digite sua senha");

if (senha === "1234") {
    // "===" é exatamente igual
    console.log("acesso permitido");
} else {
    console.log("Senha incorreta");
}