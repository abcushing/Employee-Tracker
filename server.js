const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");

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
db.query('SELECT * FROM employee_table', function (err, results) {
  // console.log(results);
});
startMenu();

// Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//   startMenu();
// });

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
    .then((answers) => {
      console.log(answers)
      if (answers.main_menu === "view all departments") {
        viewAllDepartments();
      } else if (answers.main_menu === "view all roles" ) {
        viewAllRoles();
      } else if (answers.main_menu === "view all employees" ) {
        viewAllEmployees();
      } else if (answers.main_menu === "add a department" ) {
        addADepartment();
      } else if (answers.main_menu === "add a role" ) {
        addARole();
      } else if (answers.main_menu === "add an employee" ) {
        addAnEmployee();
      } else if (answers.main_menu === "update an employee role" ) {
        updateAnEmployeeRole();
      } else if (answers.main_menu === "quit" ) {
        quitMenu();
        console.log(JSON.stringify(answers, null, "  "));
     } else {
      console.log("im gonig to quit")
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

function viewAllDepartments() {
  db.query('SELECT * FROM department_table', function (err, results) {
    if (err) {
      console.log("error retunred " , err);
    }
    console.log(results);
  });
  console.log('viewAllDepartments');
}
function viewAllRoles() {
  console.log('viewAllRoles');
}
function viewAllEmployees() {
  console.log('viewAllEmployees');
}
function addADepartment() {
  console.log('addADepartment');
}
function addARole() {
  console.log('addARole');
}
function addAnEmployee() {
  console.log('addAnEmployee');
}
function updateAnEmployeeRole() {
  console.log('updateAnEmployeeRole');
}
function quitMenu() {
  console.log('quitMenu');
}
