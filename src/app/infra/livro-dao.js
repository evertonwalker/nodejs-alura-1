class LivroDao {
    constructor(db){
        this._db = db;
    }

    lista(callBack) {
        this._db.all('select * from livros', (err, result) => {
            callBack(err, result);
        });
    }

}

module.exports = LivroDao;