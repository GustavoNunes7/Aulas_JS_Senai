//TIPOS DE DADOS
//No JavaScript, tudo o que  armazenamos em variáveis tem um tipo. Esses tipos definem o que podemos fazer com os valores.


// # Principais tipos de dados:

// - String (textos)
// - Number (números)
// - Boolean (verdadeiro ou falso)
// -  Object (objetos, que agrupam informações)
// - Array (listas e valores)
// - Null (valor vazio)
// - Underfined (quando algo não foi definido)


//String
//Sempre é escrita entre aspas ("" ou '')
let nome = "Gustavo";
let mensagem = 'Olá, mundo !'

console.log(nome);
console.log(mensagem);

//O 'typeof' serve para descobrir o tipo de um valor ou variável
console.log(typeof nome); // string 

//Podemos usar + para juntar strings
let saudacao = "olá, " + nome + "!"
console.log(saudacao)
console.log("")

//Crie uma variável chamada cidade e armazene o nome de uma cidade. e Depois, exiba no console ; "Eu moro em [cidade]"

let cidade = "Guarulhos"
let estado = "São Paulo"

console.log("Eu moro em " +  cidade +", localizado no estado de " + estado)

//template String
//shift + tecla do lado do "P" -> ´´
console.log(`Eu moro em ${cidade}.`)
console.log("")
//Number (números)
//No JavaScript,os números podem ser inteiros ou decimais
let idade = 17;
let altura = 1.70;

console.log(idade);
console.log(altura);
console.log (typeof altura);

console.log("")
console.log("Cálculos")
//Soma
let soma = 10 + 5;
console.log(`Soma: ${soma}`)

//Substração
let subtracao = 10 - 5;
console.log(`Subtração: ${subtracao}`)

//Multiplicação
let multiplicar = 10 * 5;
console.log(`Multiplicação: ${multiplicar}`)

//Divisão
let dividir = 10 / 5;
console.log(`Divisão: ${dividir}`);

console.log("")
//Crie uma variável chamada `anoAtual` e outra chamada `anoNascimento`. Calcule e exiba a idade no console
let anoAtual = 2026;
let anoNascimento = 2008;
let idadeAtual = anoAtual - anoNascimento;
console.log(`Ano atual: ${anoAtual}`);
console.log(`Ano de Nascimento: ${anoNascimento}`);
console.log(`Idade atual: ${idadeAtual} Anos`);

console.log("")


//Boolean (Verdadeiro ou falso)
//Um Boolean pode ter apenas dois valores: true (verdadeiro) ou false (falso)

let maiorDeIdade = true;
let menorDeIdade = false;

console.log(maiorDeIdade);
console.log(menorDeIdade);

let idade2 = 20;
let podeDirigir = idade2 >= 18;
console.log (podeDirigir);
console.log("")


//Objeto
//Um objeto agrupa várias informações dentro de uma mesma variável, usando chave e valor

let pessoa = {
    nome: "Jessica",
    idade: 17,
    cidade:"Mogi das Cruzes"
};
console.log(pessoa.nome); // -> Jessica
console.log(pessoa.idade);// -> 17
console.log(pessoa); // -> { nome: 'Jessica', idade: 17, cidade: 'Mogi das Cruzes' }
console.log("")

//Crie um objeto chamado 'carro' com as propriedades ´marca´. ´modelo´ e ´ano´
//Exiba cada propriedade no console

let carro = {
      marca: "Volkswagen",
      modelo: "Fusca",
      ano: 1959
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro);