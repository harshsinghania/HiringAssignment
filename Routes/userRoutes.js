var router = require('express').Router();
var userDB = require('../DatabaseConfig/usersDB');


/**
 * This API is used to authenticate the email ID and password of an User.
 * @param email Email ID for the user
 * @param password Password of the User
 */
router.post('/AuthenticateUser', (request, response) => {
    if (request.body.email && request.body.password) {
        let email = request.body.email,
            password = request.body.password;
        return userDB.authenticateUserLogin(email, password)
            .then(function () {
                response.status(200).send("Authentication Success");
            })
            .catch(function () {
                console.log("User Authentication failed");
                response.sendStatus(401);
            })
    } else {
        console.error("Username or password was not passed.");
        response.sendStatus(400)
    }
})

/**
 * This API is used to add new User.
 * @param name Name of the user.
 * @param email Email ID for the user
 * @param password Password of the User
 */
router.post('/addUser', (request, response) => {
    if (request.body.name && request.body.email && request.body.password) {
        let name = request.body.name,
            email = request.body.email,
            password = request.body.password;
        return userDB.addNewUser(name, email, password)
            .then(function () {
                response.status(200).send("User added successfully");
            })
            .catch(function (error) {
                console.log("Error while adding User.");
                response.status(500).send(error ?.sqlMessage ? error.sqlMessage : error);
            })
    } else {
        console.error("Name, Username and password was not passed.");
        response.sendStatus(400)
    }
})

module.exports = router;