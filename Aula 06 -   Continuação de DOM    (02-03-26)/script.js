// Ao pressionar as teclas "r", "g" ou "b", mudar a cor de fundo da página

// document.addEventListener("keydown" , function(e){
//     if(e.key === "r"){
//         document.body.style.backgroundColor = "red"
//     } else if (e.key === "g"){
//         document.body.style.backgroundColor = "green"
//     }else{
//         document.body.style.backgroundColor = "blue"
//     }
// }) 


// Adiciona um "ouvinte" de evento para detectar quando uma tecla é pressionada
document.addEventListener("keydown", function(e) {

    // Verifica se a tecla pressionada foi a letra "r"
    if (e.key === "r") {
        document.body.style.backgroundColor = "red" // Se for "r", muda a cor de fundo da página para vermelho
    // Verifica se a tecla pressionada foi a letra "g"
    } else if (e.key === "g") {
        document.body.style.backgroundColor = "green" // Se for "g", muda a cor de fundo da página para verde
    // Verifica se a tecla pressionada foi a letra "b"
    } else if (e.key === "b") {
        document.body.style.backgroundColor = "blue"         // Se for "b", muda a cor de fundo da página para azul
    } else {
        // Caso qualquer outra tecla seja pressionada,
        document.body.style.backgroundColor = "white"         // a cor de fundo volta para branco

    }

});