CREATE DATABASE IF not exists companydb;

USE companydb;

CREATE TABLE employee(
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL
)

INSERT INTO employee VALUES 
(1,"Mario", 12022),
(2,"Recardo", 20220),
(3,"Maria", 12022),
(4,"Sara", 42020);