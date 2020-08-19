-- SEED DEPARTMENT DATA


INSERT INTO department(name)
    (name)
VALUES ("Engineeering"), ("News"),("Operations"),
("Production"), ("Sales");

--SEED ROLE DATA


INSERT INTO role
    (title, salary, department_id )
VALUE
("ANCHOR",
100000,
1
);


INSERT INTO role
    (title, salary, department_id )
VALUES
("DIRECTOR",
80000,
2
);

INSERT INTO role
    (title, salary, department_id )
VALUE
("EDITOR",
50000,
3
);

INSERT INTO role
    (title, salary, department_id )
VALUE
("ENGINEER",
90000,
4
);

INSERT INTO role
    (title, salary, department_id )
VALUE
("PHOTOGRAPHER",
80000,
4
);

INSERT INTO role
    (title, salary, department_id )
VALUE
("PRODUCER",
60000,
5
);

INSERT INTO role
    (title, salary, department_id )
VALUE
("SALES",
125000,
6
)

INSERT INTO employees
    (first_name, last_name, role_id)
VALUES
    ("Tina", "Fey", 5),
    ("Alec", "Baldwin", 6),
    ("Jane", "Krakowski", 1),
    ("Tracy", "Morgan", 1),
    ("Jack", "McBrayer", 3),
    ("Scott", "Adsit", 2),
    ("Judah", "Freidlander", 4),
    ("Katrina", "Bowden", 4)

