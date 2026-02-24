//Funções 
//Uma função é um bloco de código reutilizável, criado para executar uma tarefa específica

// function nomeDaFuncao (parametro1 , parametro2){
//     //Código que será executado
// return resultado;
// }

// Exemplo - Somar dois números
function somar (a, b){
    return a + b;
}
somar(2, 3) //5
console.log(somar(2, 3)) //5


// Exemplo - Real para Dolár
function realparaDolar (valorReal, cotacao){
    return valorReal / cotacao
}
console.log(realparaDolar(20 , 5.17).toFixed(2)) //toFixed -> Determinar o número de casas decimias de um valor

//Calcullar aumento de salário
function calcularAumento (salario){
    return salario + (salario * 0.25)
}
console.log(calcularAumento(10000))