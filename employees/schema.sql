DROP DATABASE IF EXISTS employees_DB;

CREATE DATABASE employees_DB;

USE employees_DB;


-- DEPARTMENT TABLE

CREATE TABLE department
(
    id INT
    UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR
    (30),
    PRIMARY KEY
    (id)
);


--- ROLE TABLE
CREATE TABLE role
(
    id INT NOT NULL
    AUTO_INCREMENT,
    title VARCHAR
    (30),
    salary DECIMAL,
    department_id INT UNSIGNED NOT NULL,
 --   FOREIGN KEY (department_id) REFERENCES department(id)
	CONSTRAINT fk_department FOREIGN KEY
    (department_id) REFERENCES department
    (id) ON
    DELETE CASCADE,
	PRIMARY KEY(id)
    );


--- EMPLOYEE TABLE
CREATE TABLE employee
(
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    title VARCHAR (30),
    department VARCHAR (30),
    salary INT (10)
);
 