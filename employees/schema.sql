DROP DATABASE IF EXISTS employees_DB;

CREATE DATABASE employees_DB;

USE employees_DB;

CREATE TABLE department
(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee
(
  id INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR (30) NOT NULL,
  lastname VARCHAR (30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY(id), REFERENCES employee(id)

FOREIGN KEY
(role_id) REFERENCES employee (id),
FOREIGN KEY,
(manager_id) REFERENCES department (id)
);



