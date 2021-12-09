const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

function setUpDatabaseForTest(pathToQueryFile) {

    let db = connectToDatabase();
    const dataSql = fs.readFileSync(pathToQueryFile).toString();
    runQueries(db, dataSql);
    disconnectFromDatabase(db);
}

function connectToDatabase() {
    let db = new sqlite3.Database('picolo_database.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to db.');
    });
    return db;
}

function runQueries(db, dataSql) {
    const dataArr = dataSql.toString().split(';');
    db.serialize(() => {
        db.run('PRAGMA foreign_keys=OFF;');
        db.run('BEGIN TRANSACTION;');
        dataArr.forEach((query) => {
            if (query) {
                query += ';';
                db.run(query, (err) => {
                    if (err) throw err;
                });
            }
        });
        db.run('COMMIT;');
    });
}

function disconnectFromDatabase(db) {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Closed the db connection.');
    });
}

exports.setUpDatabaseForTest = setUpDatabaseForTest