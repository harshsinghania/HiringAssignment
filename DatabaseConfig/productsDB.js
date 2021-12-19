var dbConnect = require('./dbConnect')

module.exports = {
    /**
     * @method getAllProduct To get all product information
     * @returns Promise
     */
    getAllProduct() {
        return new Promise(function (resolve, reject) {
            var query = "SELECT * from products;"
            return dbConnect.runDatabaseQuery(query)
                .then(function (Data) {
                    resolve(Data);
                })
                .catch(function (error) {
                    console.error("Error while fetching error");
                    reject(error)
                })
        })
    },

    /**
     * @method addNewProduct To add new product information
     * @param {*} name 
     * @param {*} category 
     * @param {*} count 
     * @returns 
     */
    addNewProduct(name, category, count) {
        return new Promise(function (resolve, reject) {
            var query = `INSERT INTO PRODUCTS (Name, Category, Count) VALUES ("${name}", "${category}", "${count}");`
            return dbConnect.runDatabaseQuery(query)
                .then(function (res) {
                    if (res ?.affectedRows > 0) {
                        console.error("Product %s added successfully.", name);
                        resolve();
                    } else {
                        console.log("Unable to add Product: %s", name);
                        reject();
                    }
                })
                .catch(function (error) {
                    console.error("Error while adding product details for product name:%s.\nError:", name, error);
                    reject(error);
                })
        });
    },

    /**
     * @method updateProduct To update product category and count.
     * @param {*} name 
     * @param {*} category 
     * @param {*} count 
     * @returns 
     */
    updateProduct(name, category, count) {
        return new Promise(function (resolve, reject) {
            var query = `UPDATE PRODUCTS SET Category =  "${category}", Count = "${count}" WHERE Name = "${name}";`
            return dbConnect.runDatabaseQuery(query)
                .then(function (res) {
                    if (res ?.affectedRows > 0) {
                        console.error("Product %s udated successfully.", name);
                        resolve();
                    } else {
                        console.log("Unable to update Product: %s", name);
                        reject();
                    }
                })
                .catch(function (error) {
                    console.error("Error while updating product details for product name:%s.\nError:", name, error);
                    reject(error);
                })
        });
    },

    /**
     * @method deleteProduct To delete product.
     * @param {*} name 
     * @returns 
     */
    deleteProduct(name) {
        return new Promise(function (resolve, reject) {
            var query = `DELETE FROM PRODUCTS WHERE Name="${name}";`
            return dbConnect.runDatabaseQuery(query)
                .then(function (res) {
                    if (res ?.affectedRows > 0) {
                        console.error("Product %s deleted successfully.", name);
                        resolve();
                    } else {
                        console.log("Unable to delete Product: %s", name);
                        reject();
                    }
                })
                .catch(function (error) {
                    console.error("Error while deleting product details for product name:%s.\nError:", name, error);
                    reject(error);
                })
        });
    }
}