var router = require('express').Router();
var productDB = require('../DatabaseConfig/productsDB');

/**
 * This API is used to get all products.
 */
router.get('/getAllProducts', (request, response) => {
    return productDB.getAllProduct()
        .then(function (data) {
            response.send(data);
        })
        .catch(function (error) {
            response.status(500).send("Error while getting Data %s.", error);
        })
})

/**
 * This API is used to add product details.
 * @param name Name of the product.
 * @param category category for the product
 * @param count count of the product
 */
router.post('/addNewProducts', (request, response) => {
    if (request.body.name && request.body.category && request.body.count) {
        let name = request.body.name,
            category = request.body.category,
            count = request.body.count;
        return productDB.addNewProduct(name, category, count)
            .then(function () {
                response.status(200).send("Product added successfully");
            })
            .catch(function (error) {
                console.log("Error while adding Product.");
                response.status(500).send(error ?.sqlMessage ? error.sqlMessage : error);
            })
    } else {
        console.error("Name, category and count was not passed for the product.");
        response.sendStatus(400)
    }
})

/**
 * This API is used to update product details.
 * @param name Name of the product.
 * @param category category for the product
 * @param count count of the product
 */
router.post('/updateProduct', (request, response) => {
    if (request.body.name && request.body.category && request.body.count) {
        let name = request.body.name,
            category = request.body.category,
            count = request.body.count;
        return productDB.updateProduct(name, category, count)
            .then(function () {
                response.status(200).send("Product updated successfully");
            })
            .catch(function (error) {
                console.log("Error while updating Product.");
                response.status(500).send(error ?.sqlMessage ? error.sqlMessage : error);
            })
    } else {
        console.error("Name, category and count was not passed for the product.");
        response.sendStatus(400)
    }
})

/**
 * This API is used to delete product information.
 * @param name Name of the product.
 */
router.post('/deleteProduct', (request, response) => {
    if (request.body.name) {
        let name = request.body.name;
        return productDB.deleteProduct(name)
            .then(function () {
                response.status(200).send("Product deleted successfully");
            })
            .catch(function (error) {
                console.log("Error while deleting Product.");
                response.status(500).send(error ?.sqlMessage ? error.sqlMessage : error);
            })
    } else {
        console.error("Name was not passed for the product.");
        response.sendStatus(400)
    }
})

module.exports = router;