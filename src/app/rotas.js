app.get('/', (req, res) => {
    res.send('<h1>Bem vindo</h1>');
});

app.get('/livros', (req,res) => {
    res.send('<h1>livros</h1>');
});