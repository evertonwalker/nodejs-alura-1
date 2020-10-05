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

        livroDao.lista().then((result) => {
            res.marko(
                require('../app/views/lista/lista.marko'),
                {
                    livros: result
                }
            )
        })
        .catch(err => console.log(err));
    });


    app.get('/livros/form', (req, res) => {
        res.marko(require('../app/views/cadastro/form.marko'));
    });

    app.post('/livros', (req, res) => {
        
        const livroDao = new LivroDao(db);
        const livro = req.body;

        livroDao.criar(livro).then((result) => {
            
        })
        .catch(err => console.log(err));
    });

}