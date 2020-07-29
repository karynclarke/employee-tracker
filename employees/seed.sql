DROP DATABASE IF EXISTS employees_DB;

CREATE DATABASE employees_DB;

USE employees_DB;

CREATE TABLE department
(
    id INT NOT NULL
    AUTO_INCREMENT,
    name VARCHAR
    (30),
    PRIMARY KEY
    (id)
);
    INSERT INTO department
        (name)
    VALUE
    ("Engineeering");
    INSERT INTO department
        (name)
    VALUE
    ("News");
    INSERT INTO department
        (name)
    VALUE
    ("Operations");
    INSERT INTO department
        (name)
    VALUE
    ("Production");
    INSERT INTO department
        (name)
    VALUE
    ("Sales");

    CREATE TABLE role
    (
        id INT NOT NULL
        AUTO_INCREMENT,
    title VARCHAR
        (30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY
        (id)
);
        INSERT INTO role
            (title)
        VALUE
        ("Account Manager");
        INSERT INTO role
            (title)
        VALUE
        ("Director");
        INSERT INTO role
            (title)
        VALUE
        ("Editor");
        INSERT INTO role
            (title)
        VALUE
        ("Engineer");
        INSERT INTO role
            (title)
        VALUE
        ("Manager");
        INSERT INTO role
            (title)
        VALUE
        ("Producer");

        CREATE TABLE employee
        (
            id INT NOT NULL
            AUTO_INCREMENT,
    first_name VARCHAR
            (30),
    last_name VARCHAR
            (30),
    PRIMARY KEY
            (id)
);

            INSERT INTO employee
                (first_name, last_name)
            VALUE
            ("Anne",
            "Lewis"
            );
            INSERT INTO employee
                (first_name, last_name)
            VALUE
            ("Nathan",
            "Baker"
            ); 
  