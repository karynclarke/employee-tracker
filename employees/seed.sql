DROP DATABASE IF EXISTS tracker_DB;

CREATE DATABASE tracker_DB;

USE tracker_DB;

CREATE TABLE employees
(
  id INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR (30) NOT NULL,
  lastname VARCHAR (30) NOT NULL,
  title VARCHAR (30) NOT NULL,
  department VARCHAR (30) NOT NULL,
  salary INT NOT NULL,
  manager VARCHAR (30),

  PRIMARY KEY
    (id)
);

INSERT INTO employees
    (firstname, lastname, title, department, salary, manager)
VALUES
    ("Anne", "Lewis", "Producer", "News", "65000", "Coral Wilson");

INSERT INTO employees 
    (firstname, lastname, title, department, salary, manager) 
VALUES
    ("Nathan", "Baker", "Director", "Production", "70000","Jake Carter");

INSERT INTO employees
    (firstname, lastname, title, department, salary, manager)
VALUES
    ("Gabe", "Johnson", "Engineer", "Operations", "85000", "Ed White");   

INSERT INTO employees
(firstname, lastname, title, department, salary, manager)
VALUES
    ("Lucy", "Richardson",  "Editor", "News", "40000", "Coral Wilson");     





