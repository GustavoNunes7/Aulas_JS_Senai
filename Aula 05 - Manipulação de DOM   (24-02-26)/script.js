//O  DOM (Document Object Model) é representação do HTML em forma de árvore de objetos

//Isso permite que o JavaScript

// - Leia elementos da página
// - Modifique textos
// - Troque imagens
// - Reaja a cliques
// - Crie elementos novos

// 👉 O Navegador transforma o HTML em objetos manipuláveis



//=============================================
//SELECIONANDO ELEMENTOS DO DOM

//selecionar por ID
let titulo = document.getElementById("titulo")
let subtitulo = document.getElementById("subtitulo")
let paragrafo = document.getElementById("paragrafo")
let imagem = document.getElementById("imageteste")

//selecionar por classe
let caixas = document.getElementsByClassName("box")

//Mostrando no console para o aluno visualizar
console.log(titulo)
console.log(caixas)
console.log(imagem)