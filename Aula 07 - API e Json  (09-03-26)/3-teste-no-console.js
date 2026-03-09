// ===================================================================
// EXEMPLO DE CONSUMO DE API COM FETCH (PROMISE)
// API usada: https://dog.ceo/api/breeds/image/random
// Essa API retorna uma imagem aleatória de cachorro 🐶
// ===================================================================

// TESTE 1 : Fetch básico usando .then()

// fetch() faz uma requisição HTTP para uma API externa
fetch('https://dog.ceo/api/breeds/image/random')
    // fetch retorna uma PROMISE (Algo que vai chegar depois)
    .then(resposta => resposta.json())
    // resposta.json converte a resposta da API para JSON
    //JSON é o formato de padrão de dados usados em APIs

    .then(dados =>{
        //Os dados agora contem o objeto retornando pela API


        //Mostra no console o objeto completo retornado
        console.log('✅ Dados Completos da API:', dados);
        //Mostrar a URL da imagem
        console.log('🗺️ - URL da imagem', dados.message);
        
        
    })



// ===================================================================
// TESTE 2: Usando async / await
// É uma forma mais moderna e mais fácil de ler
// ===================================================================

//Vamos criar uma função assíncrona
//Funções async permitem usar "await"
async function testarAPI() {
    
    //await significa: espere a resposta chegar antes de continuar
    const resposta = await fetch('https://dog.ceo/api/breeds/image/random')

    //Precisamos converter a resposta em JSON
    const dados = await resposta.json();

    console.log('📦 Resposta do API:' , dados);
    
    console.log('🐩 Imagem do cachorro:' ,dados.message);
    
}

//chamamos a função para executar a API
testarAPI();