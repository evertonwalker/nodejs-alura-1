const app = require('./src/config/custom-express');

app.listen(3000, () => {
    console.log('Server rodando na porta 3000');
});

/* 

const http = require('http');

Maneira manual de criar um servidor sem usar express com o o node

const server = http.createServer((req, res) => {

    let html = '';
    if (req.url == '/') {
        html = `
        <h1>
            Servidor rodando.
        </h1>
    `;
    } else if (req.url === '/livros') {
        html = '<h1>Livros </h1>';
    }


    res.end(html);


});

server.listen(3000);


*/