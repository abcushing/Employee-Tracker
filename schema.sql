DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

-- 'department' table
CREATE TABLE department_table (
  id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`)
);

-- 'role' table
CREATE TABLE role_table (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (`id`)

);

-- 'employee' table
CREATE TABLE `employee_table` (
  `id` int NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `role_id` int NOT NULL,
  `manager_id` int NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
