const connection = require("../dbConnect");
const inq = require("inquirer");
// const { connect } = require("../dbConnect");
// const { title } = require("process");

const updateEmployeeRole = (cb) => {
    connection.query("SELECT * from employees", (err, rows) => {
        connection.query("SELECT * from company_role", (err, jobRows) => {
            const name = rows.map((row) => {
                return {
                    name: `${row.first_name} ${row.last_name}`,
                    value: row.employee_id,
                };
            });
            const companyRoles = jobRows.map((row) => {
                return {
                    name: row.title,
                    value: row.role_id,
                };
            });
            inq.prompt([
                {
                    name: "currentEmployeeRole",
                    type: "list",
                    message: "Select the employee you would like to update",
                    choices: name,
                },
                {
                    name: "newEmployeeRole",
                    type: "list",
                    message: "Select the title of the employee's new role",
                    choices: companyRoles,
                },
            ])
                .then((answer) => {
                    connection.query("UPDATE employees SET employee_role_id = ? WHERE employee_id =?",
                        [answer.newEmployeeRole, parseInt(answer.currentEmployeeRole)],
                        (err) => {
                            if (err) throw err;
                            console.log(
                                `Selected employee has been updated from role ${answer.currentEmployeeRole} to role ${answer.newEmployeeRole}!`
                            );
                            cb();
                        }
                    );
                });
        });
    });
}

module.exports = { updateEmployeeRole };