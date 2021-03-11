DROP DATABASE IF EXISTS teampitanque;
CREATE DATABASE IF NOT EXISTS teampitanque;
USE teampitanque;

CREATE TABLE IF NOT EXISTS register(
    id INT NOT NULL AUTO_INCREMENT,
firstName VARCHAR(200),
lastName VARCHAR (200),
email text ,
numberPhone int(255),
PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS postes(
    id INT NOT NULL AUTO_INCREMENT,
    title varchar(50) NOT NULL,
    namee varchar(50) NOT NULL,
    imageUrl varchar(255) NOT NULL,
    createdAt VARCHAR(100) NOT NULL,
    body TEXT NOT NULL,
    PRIMARY KEY (id)
)
INSERT into register (firstName, lastName, email,numberPhone) VALUES ("Jihed", "Abidi", "jiheda14@gmail.com" ,"29490730");
INSERT into register (firstName, lastName, email,numberPhone) VALUES ("mohamed dhia", "aouichaoui", "dhia12aouichaoui@gmail.com","27211712");

