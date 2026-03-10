// ==========================================================
//      NOSSA API DE CACHORROS
//      Feita com Node.Js + Express


//      Agora as fotos NÃO são mais baixadas automaticamente.
//      Elas devem existir manualmente na pasta:

//      data/fotos/
// ==========================================================

// Importar o framework Express para criar o servidor
const express = require("express");

// Importar o CORS para permitir requisições de outros domínios (Ex: front-end)
const cors = require("cors");

// Importa o módulo de arquivos do Node
const fs = require("fs");

// Importar utilidades para trabalhar com caminhos de arquivos
const path = require("path");

// Importar o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json");
const { log } = require("console");

// Criar a aplicação Express
const app = express();

// Definir a porta onde o servidor irá rodar
const PORT = 3000; 

// Habilitar o uso de CORs na aplicação
app.use(cors());

// ==========================================================
//  SERVIR ARQUIVOS ESTÁTICOS 
// ==========================================================

// Aqui estamos dizendo para o Express:
// "TUDOOOOOOOOOOOOOOOOOOO" que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
app.use(
    "/fotos", //rota pública
    express.static(
        path.join(__dirname, "data/fotos")
            // Caminho real da pasta no servidor
        
    )
);

// ==========================================================
//  FUNÇÃO AUXILIAR
// ==========================================================
// Função que recebe uma array e retorna um item aleatório dele
function sortear (array){

    // Gerar um número entre 0 e o tamanho do array
    const i = Math.floor(Math.random() * array.length)
    // Math.random vai gerar um número aleatório entre 0 e 1
    // array.lenght pega o tamanho do array (5 itens)
    // Math.floor vai arrendondar o numero para baixo EX: 3.8 -> 3

    // Retona o item sorteado
    return array [i];
}

// ==========================================================
//  ROTAS API
// ==========================================================

// ==========================================================
//  ROTA 1 - Cachorro Aleatório
// ==========================================================

//http://localhost:3000/api/cachorros/aleatorio

app.get("/api/cachorros/aleatorio", (req, res) => {
    // Pegar todos as fotos de todas as raças
    // Object.values pega os valores do objeto
    // flat transforma tudo em um único  array
    const todasAsFotos = Object.values(cachorros).flat();

    // Sortear uma foto aleatória
    const item = sortear(todasAsFotos)
    
    // Responder para o cliente em formato JSON
    res.json({
        // Status da resposta 
        status: "sucess",

        // URl da imagem que foi sorteada
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

// ==========================================================
//  ROTA 2 - Cachorro por raça
// ==========================================================
//http://localhost:3000/api/cachorros/husky

app.get("/api/cachorros/:raca", (req, res) => {

    // PEga o parâmetro da URL (Ex: Husky)
    const raca = req.params.raca.toLowerCase();

    // Verificar se essa raça existe no JSON
    if(!cachorros[raca]){
        res.status(404).json({

            // Status de erro
            status: "error",

            // Mensagem explicando o problema
            message: `Raça "${raca}" não encontrada`
        });
        // Encerrar a execução da rota
         return;
    }
    // Sortear uma foto da raça solicitada
    const item = sortear(cachorros[raca]);

    //Retorna a respsota em JSON
    res.json({

        // Status de sucesso
        status: "sucess",

        // URL da imagem selecionada
        message: `http://localhost:${PORT}/fotos/${item}`
    });

    
});


// ==========================================================
//  INICIAR O SERVIDOR
// ==========================================================

// Iniciar o seridor Express
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📂 Coloque as fotos manualmente em: data/fotos/`);
    
})