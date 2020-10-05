class LivroDao {
    constructor(db) {
        this._db = db;
    }

    lista() {

        return new Promise((resolve, reject) => {
            this._db.all('select * from livros', (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }
}

module.exports = LivroDao;