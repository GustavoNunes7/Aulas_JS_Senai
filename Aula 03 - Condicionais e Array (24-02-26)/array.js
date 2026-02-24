//Um array é uma lista que pode armazenar vários valores
// 0 é a primeira posição, 1 é a segunda e assim por diante

let frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas[2]);
console.table(frutas); //cria uma tabela com os dados da lista

//adiciona ao final do array
frutas.push("Morango");
console.log(frutas);
console.table(frutas);

//remove a última posição
frutas.pop();
console.log(frutas);

//remover a posição indicada (splice)
// frutas.splice(1);
// console.table(frutas)




//Crie um array chamado animais e adicione três animais
let animais = ["Narval"]
animais.push("Urso Polar", "Raposa", "Aranha")
console.table(animais);

//Crie um array chamado animais com 03 animais e animais  e adicione mais três animais (use o push).
let animaisII = ["Tubarão", "Papagaio", "Coruja"];
animaisII.push("Girafa", "Pardal", "Calopsita")
console.table(animaisII);