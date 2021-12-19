var mysql = require('mysql2');
var configuration = require('../config.json')

var dbConnection = mysql.createConnection({
    host: configuration.databaseHost,
    user: configuration.databaseUsername,
    password: configuration.databasePassword,
    database: configuration.databaseName
});
module.exports = {
    databaseConnection() {
        dbConnection.connect(function (err) {
            if (err) {
                console.error("Unable to connect to the database.");
                throw err;
            } else {
                console.log("Database Connected");
            }
        });
    },
    runDatabaseQuery(query) {
        return new Promise(function (resolve, reject) {
            dbConnection.query(query, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        })
    }
}


//module.exports = dbConnection;