-- SEED DEPARTMENT DATA


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


--SEED ROLE DATA


INSERT INTO role
    (title, salary, department_id )
VALUE
("TECH",
80000,
1
);


INSERT INTO role
    (title, salary, department_id )
VALUE
("Anchor",
100000,
2
);



INSERT INTO employee
    (first_name, last_name, title, department, salary)
VALUE
("Anne",
"Lewis",
"Producer",
"News",
"50000"
);

INSERT INTO employee
    (first_name, last_name, title, department, salary)
VALUE
("Nathan",
"Baker",
"Tech",
"Engineering",
"75000"
);