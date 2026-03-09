/* 
CONSUMINDO APIT COM JAVASCRIPT
API: https:dogs.ceo/api
*/
//==================================
// 1- SELECIONAR ELEMENTOS DO HTML
//==================================

//Pegar a imagem do cachorro
const dogImage = document.getElementById("docImage");

//elemento onde aparece  o nome da raça
const breedName = document.getElementById("breedName");

//Botão que busca cachorro aleatório
const randomBtn = document.getElementById("randomBtn");

//Botão que busca a raça
const searchBtn = document.getElementById("searchBtn");

//Campo de input onde o usuário digita a raça
const breedIpnut = document.getElementById("breedIpnut")

//Área onde a imagem aparece
const dogArea = document.querySelector(".dog-area")

//==================================
// 2 - URL BASE DA API
//==================================

//Endereço principal da API
const API_BASE = "https://dog.ceo/api"

//==================================
// 3 -  FUNÇÃO QUE CHAMA A API
//==================================

// Função assincirona que faz requisição HTTP
async function fetchFromApi(endpoint) {
    

    //Adiciona classe de loading (mostra "Carregando")
    dogArea.classList.add("loading")

    try{
        // Montar a URL completa da requisição
        const url = `${API_BASE}${endpoint}`;

        // Mostrar no console a URL chamada
        console.log("Requisição:", url);

        // Faz requisição HTTP para a API
        const response = await fetch (url);

        //Converter para JSON
        const data = await response.json();
        
        // Mostrar a resposta console
        console.log("Resposta:", data);

        // Verificar se a API retornou com sucesso
        if(data.status === "success"){
            // URL da imagem retornada pela API
            const imageURL = data.message;

            // Colocar a imagem no element <img>
            dogImage.src = imageURL

            //Extrai a raça da URL
            const breed = imageURL.split("/")[4];

            //Substituir "-" por espaço
            const formattedBreed = breed.replace(/-/g," ")

            //Deixa a primeira letra maiúscula
            const finalBreed =
                formattedBreed.charAt(0).toUpperCase()+
                formattedBreed.slice(1)
            
            // Mostra o nome da raça na tela
            breedName.textContent= finalBreed;

        }
        
    } catch(error){
        // Mostrar erro no console
        console.error("Erro:", error);

        // Mensagem de erro para o usuário
        breedName.textContent = "Erro ao carregar";
     
        
        //Remover imagem
        dogAreaImage.src = " "
    } finally{

        // Remove estado de loading
        dogArea.classList.remove("loading")
    }


}

fetchFromApi ("/breeds/image/random")
