// Importar o modulo HTTP nativo do Node.js
// Esse módulo permite criar servidores web
const http = require ("http")

// Criar um servidor http
//Função que será executada toda vez que alguem acessar o servidor
const server = http.createServer((req, res) => {
    // Definir o status a resposta e tipo de conteúdo
    // 200 significa "requisição bem-sucedida"
    // Content-type "text/html" informar que estamos enviando um HTML
    res.writeHead(200, {"Content-type": "text/html"})

    // Enviar resposta para o navegador
    res.end(`
        <h1> API de Cachorros</h1>    
        <p>Servidor Node.js funcionando</p>
    `);
});

// Fazer o servidor começar a escutar uma porta (3000)
// Isso significa que ele ficará esperando requisições nessa porta
server.listen(3000, () =>{
    console.log("Servidor rodando em http://localhost:3000");
    
});