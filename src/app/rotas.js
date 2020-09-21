/*
    Recebe o app da configuração do custom-express
    e com isso faz o roteamento;
*/
const db = require('./../config/database')
const LivroDao = require('../app/infra/livro-dao');


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('<h1>Bem vindo</h1>');
    });

    app.get('/livros', (req, res) => {

        const livroDao = new LivroDao(db);

        livroDao.lista((err, resultado) => {
            res.marko(
                require('../app/views/lista/lista.marko'),
                {
                    livros: resultado
                }
            )
        });


    });
}