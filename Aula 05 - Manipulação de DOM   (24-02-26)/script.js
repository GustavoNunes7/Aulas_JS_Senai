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

//=====================================================//
// Função para alterar o conteúdo                     //
//===================================================//

function alterar(){
    //Alterando os textos
    titulo.innerText = "Novo Título" //.innerText serve para alterar texto
    subtitulo.innerText = "Subtítulo alterado com sucesso!" 
    paragrafo.innerText = "O texto do parágrafo foi modificado"

    //alterando elementos da classe
    caixas[0].innerText = "Primeiro parágrafo alterado (Classe)" //Primeiro elemento 
    caixas[1].innerText = "Segundo parágrafo alterado (Classe)" //Segundo elemento 

    //Alterando a imagem
    imagem.src ="https://www.devmedia.com.br/arquivos/Artigos/43033/fig6.png"
}