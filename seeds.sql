INSERT INTO department_table (id, department_name)
VALUES (001, "Shipping"),
       (002, "Sales"),
       (003,"HR"),
       (004, "Marketing"),
       (005,  "Graphic Design"),
       (006, "Production"),
       (007, "IT"),
       (008, "Customer Support"),
       (009, "Compliance"),
       (010, "Training");
       
INSERT INTO role_table (id, title, salary, department_id)
VALUES (001, "Shipping Manager", 30000, 001),
       (002, "Sales Manager", 35000, 002),
       (003,"HR Lead", 40000, 003)
       (004, "Marketing Manager", 33000, 004),
       (005,  "Lead Graphic Designer", 25000, 005 ),
       (006, "Production Manager", 32000, 006),
       (007, "IT Manager", 45000, 007),
       (008, "Customer Support", 20000, 008),
       (009, "Compliance Manager" , 20000, 009 ),
       (010, "Training Lead", 22000, 010),
       (011, "Shipping Clerk", 15000, 001),
       (012, "IT Help Desk", 32000, 007),
       (013, "IT Support", 45000, 007),
        (015, "CEO", 4500000, 003),
       (014, "IT Developer", 50000, 007);

       INSERT INTO employee_table (id, first_name, last_name, role_id, manager_id)
VALUES (001, "John", "Fishman", 001, 015),
       (002, "Billy", "Sellerman", 011, 001),
       (003,"Barack", "Obama", 011, 001),
       (004, "Jimmy" , "Kimmel", 011, 001),
       (005,  "Viggo", "Mortenstein", 012, 007 ),
       (006, "Timmy", "Apple", 012, 007 ),
       (007, "Josh", "Samsung", 009, 014 ),
       (008, "Andy", "MacDonald", 003, 015 ),
       (009, "Frank", "Reynolds", 015, 003 ),
       (010, "Johnny", "Trainer", 010, 015),
       (011, "Sally", "Fields", 008, 015),
       (012, "Sydney", "Australia", 004, 015),
       (013, "Billy", "Strings", 002, 015),
       (014, "Jack", "Lemmon", 005, 015);
