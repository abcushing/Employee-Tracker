const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

const PORT = process.env.PORT || 3306;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "root",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

// Query database
db.query("SELECT * FROM employee_table", function (err, results) {
  // console.log(results);
});
startMenu();

// write message to screen
function startMenu() {
  inquirer
    .prompt({
      type: "list",
      name: "main_menu",
      message: "What do you want to do?",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
        "quit",
      ],
    })
    // ask the questions
    .then((answers) => {
      console.log(answers);
      if (answers.main_menu === "view all departments") {
        viewAllDepartments();
      } else if (answers.main_menu === "view all roles") {
        viewAllRoles();
      } else if (answers.main_menu === "view all employees") {
        viewAllEmployees();
      } else if (answers.main_menu === "add a department") {
        addADepartment();
      } else if (answers.main_menu === "add a role") {
        addARole();
      } else if (answers.main_menu === "add an employee") {
        addAnEmployee();
      } else if (answers.main_menu === "update an employee role") {
        updateAnEmployeeRole();
      } else if (answers.main_menu === "quit") {
        quitMenu();
        console.log(JSON.stringify(answers, null, "  "));
      } else {
        console.log("im gonig to quit");
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
        // Prompt couldn't be rendered in the current environment
      } else {
        console.log(error);
        // Something else went wrong
      }
    });
}
// view all departments function
function viewAllDepartments() {
  db.query("SELECT * FROM department_table", function (err, results) {
    if (err) {
      console.log("error retunred ", err);
    } else {
      console.table(results);
      startMenu();
    }
  });
}
// view all roles function
function viewAllRoles() {
  db.query("SELECT * FROM role_table", function (err, results) {
    if (err) {
      console.log("error retunred ", err);
    } else {
      console.table(results);
      startMenu();
    }
  });
}
// view all employees function
function viewAllEmployees() {
  db.query("SELECT * FROM employee_table", function (err, results) {
    if (err) {
      console.log("error retunred ", err);
    } else {
      console.table(results);
      startMenu();
    }
  });
}
// add a department function
function addADepartment() {
  const questions = [
    {
      type: "input",
      name: "department_name",
      message: "What's your department name",
    },
    {
      type: "input",
      name: "department_id",
      message: "What's your department ID",
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, "  "));
    db.query(
      "INSERT INTO department_table (id, department_name) VALUES (" +
        answers.department_id +
        ',"' +
        answers.department_name +
        '")',
      function (err, results) {
        if (err) {
          console.log("error retunred ", err);
        } else {
          startMenu();
        }
      }
    );
  });
}
// add a role function
function addARole() {
  const questions = [
    {
      type: "input",
      name: "role_id",
      message: "What's your role ID",
    },
    {
      type: "input",
      name: "department_id",
      message: "What's your department ID",
    },
    {
      type: "input",
      name: "title_name",
      message: "What's your job title",
    },
    {
      type: "input",
      name: "salary",
      message: "What's your salary",
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, "  "));
    db.query(
      "INSERT INTO role_table (id, title, salary, department_id) VALUES (" +
        answers.role_id +
        ',"' +
        answers.title_name +
        '",' +
        answers.salary +
        "," +
        answers.department_id +
        ")",
      function (err, results) {
        if (err) {
          console.log("error retunred ", err);
        } else {
          startMenu();
        }
      }
    );
  });
}
// add an employee function
function addAnEmployee() {
  const questions = [
    {
      type: "input",
      name: "employee_id",
      message: "What's your employee ID",
    },
    {
      type: "input",
      name: "first_name",
      message: "What's your first name",
    },
    {
      type: "input",
      name: "last_name",
      message: "What's your last name",
    },
    {
      type: "input",
      name: "role_id",
      message: "What's your role id",
    },
    {
      type: "input",
      name: "manager_id",
      message: "What's your manager id",
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, "  "));
    db.query(
      "INSERT INTO employee_table (id, first_name, last_name, role_id, manager_id) VALUES (" +
        answers.employee_id +
        ',"' +
        answers.first_name +
        '","' +
        answers.last_name +
        '",' +
        answers.role_id +
        "," +
        answers.manager_id +
        ")",
      function (err, results) {
        if (err) {
          console.log("error retunred ", err);
        } else {
          console.log("Added an Employee");
          startMenu();
        }
      }
    );
  });
}
// update an employee function
function updateAnEmployeeRole() {
  const questions = [
    {
      type: "input",
      name: "first_name",
      message: "What's your first name",
    },
    {
      type: "input",
      name: "last_name",
      message: "What's your last name",
    },
    {
      type: "input",
      name: "role_id",
      message: "What's your new role id",
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    db.query(
      "SELECT id FROM employee_table WHERE first_name = '" +
        answers.first_name +
        "' and last_name = '" +
        answers.last_name + "'",
      function (err, results) {
        console.log(results)
        if (err) {
          console.log("error retunred ", err);
        } else {
          db.query(
            "UPDATE employee_table SET role_id= "+ answers.role_id + " WHERE id = " + results[0].id ,
            function (err, results) {
              if (err) {
                console.log("error retunred ", err);
              } else {
                console.log("Updated an Employee");
                startMenu();
              }
            }
          );
        }
      }
    );
  });
}
// quit menu function
function quitMenu() {
  db.end();
}
