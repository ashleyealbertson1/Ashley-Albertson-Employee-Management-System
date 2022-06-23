
const inq = require("inquirer");
const { viewAllRoles, viewAllDepts, viewAllEmployees } = require("./lib/view");
const { addEmployee, addDept, addRole } = require("./lib/add");
const { updateEmployeeRole } = require("./lib/update")
const connection = require("./dbConnect");
const { exit } = require("process");

const runSystem = () => {
  inq.prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all company roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
        name: "mainMenu",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "You must select an option to continue.";
          }
        },
      },
    ])
    .then((answer) => {
      switch (answer.mainMenu) {
        case "View all departments":
          viewAllDepts(runSystem);
          break;

        case "View all company roles":
          viewAllRoles(runSystem);

          break;

        case "View all employees":
          viewAllEmployees(runSystem);
          break;

        case "Add an employee":
          addEmployee(runSystem);
          break;

        case "Add a role":
          addRole(runSystem);
          break;

        case "Add a department":
          addDept(runSystem);
          break;

        case "Update an employee role":
          updateEmployeeRole(runSystem);
          break;

        case "Exit":
          exit();
      }
    });
}


runSystem();
module.exports = runSystem;
