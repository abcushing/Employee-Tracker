DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

-- 'department' table
CREATE TABLE department_table (
  id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL
);

-- 'role' table
CREATE TABLE role_table (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL
);

-- 'employee' table
CREATE TABLE employee_table (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL
);
