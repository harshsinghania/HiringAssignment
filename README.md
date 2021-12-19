# HiringAssignment
This code base is created for Hiring Assignment.

# Requirement
1. Node.JS 
2. MySQL


# Prerequisite
Need to configure MySQL server with 1 database and 2 Tables (Users and Product).
The table schema is as below.

For Users Table:
```
+----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| UserId   | int          | NO   | PRI | NULL    | auto_increment |
| Name     | varchar(255) | YES  |     | NULL    |                |
| Email    | varchar(255) | YES  | UNI | NULL    |                |
| Password | varchar(255) | YES  |     | NULL    |                |
+----------+--------------+------+-----+---------+----------------+
```
For Products Table:
```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| ProductId | int          | NO   | PRI | NULL    | auto_increment |
| Name      | varchar(255) | YES  | UNI | NULL    |                |
| Category  | varchar(255) | YES  |     | NULL    |                |
| Count     | int          | YES  |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```
> The Database and MySQL configuration can be modified in the project via config.json File present in root path.


# How to run:
To run the code first install the node modules via the below command.
```
npm install
```
After installing node modules run the code via the below command.
```
npm start
```

# API Help:
The project consist of the below API's.

[POST] /AuthenticateUser
   
   Paylod of the API: 
  ```
  {
    "email": "<EMAIL>",
    "password": "<Password>"
  }
```

[POST] /addUser
  
  Payload of the API:
  ```
  {
    "name": "<NAME>",
    "email": "<EMAIL>",
    "password": "<Password>"
  }
  ```

[GET] /getAllProducts


[POST] /addNewProducts
  
  Payload of the API:
  ```
  {
    "name": "product1",
    "category": "category1",
    "count": 660
  }
  ```

[POST] /updateProduct
  
  Payload of the API:
  ```
  {
      "name": "product2",
      "category": "category2",
      "count": 500
  }
  ```

[POST] /deleteProduct
   
   Payload of the API:
  ```
  {
    "name": "product1"
  }
```
