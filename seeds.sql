USE company_db;

INSERT INTO dept (dept_name)
VALUES ("Marketing"),
        ("Sales"),
        ("Product Manager"),
        ("Accounting"),
        ("IT");

INSERT INTO company_role (title, salary, dept_id)
VALUES ("Marketing Manager", 80000, 2),
        ("Marketing Coordinator", 50000, 2),
        ("Sales Director", 160000, 1),
        ("Salesperson", 120000, 1),
        ("Sales Coordinator", 50000, 1),
        ("Accounting Manger", 90000, 3),
        ("Accountant", 50000, 3),
        ("IT Manager", 120000, 4),
        ("Analyst", 80000, 4),
        ("Engineer", 100000, 4);

INSERT INTO employees (first_name, last_name, employee_role_id, manager_id)
VALUES ("Ashley", "Albertson", 1, 3),
        ("Krystle", "Dinkle", 2,1),
        ("Brody", "Albertson", 1,4),
        ("Ashallan", "Simon", 1, 2);

