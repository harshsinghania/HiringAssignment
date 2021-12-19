var dbConnect = require('./dbConnect')

module.exports = {
    /**
     * @method authenticateUserLogin To Authenticate the Username and password
     * @param {*} email 
     * @param {*} password 
     * @returns Promise
     */
    authenticateUserLogin(email, password) {
        return new Promise(function (resolve, reject) {
            var query = `SELECT * FROM USERS where Email = '${email}';`
            return dbConnect.runDatabaseQuery(query)
                .then(function (res) {
                    if (res.length > 0) {
                        if (res[0] ?.Password != password) {
                            console.error("Password missmatch for Email ID: %s", email);
                            reject();
                        } else {
                            console.log("User successfully authenticated for %s", res.name ? res.name : email);
                            resolve();
                        }
                    } else {
                        console.log("No user Found with EmailID: %s", email);
                        reject();
                    }
                })
                .catch(function () {
                    console.error("Error while fetching user details for Email:%s.", email);
                    reject();
                })
        });
    },

    /**
     * @method addNewUser To add new user to the USERS Table
     * @param {*} name 
     * @param {*} email 
     * @param {*} password 
     * @returns 
     */
    addNewUser(name, email, password) {
        return new Promise(function (resolve, reject) {
            var query = `INSERT INTO USERS (Name, Email, Password) VALUES ("${name}", "${email}", "${password}");`
            return dbConnect.runDatabaseQuery(query)
                .then(function (res) {
                    if (res ?.affectedRows > 0) {
                        console.error("User %s added successfully.", name);
                        resolve();
                    } else {
                        console.log("Unable to add user: %s", name);
                        reject();
                    }
                })
                .catch(function (error) {
                    console.error("Error while adding user details for user:%s.\nError:", name, error);
                    reject(error);
                })
        });
    }
}