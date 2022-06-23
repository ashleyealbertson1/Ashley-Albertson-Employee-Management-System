const connection = require("../dbConnect");
const inq = require("inquirer");
// const { connect } = require("../dbConnect");
// const { title } = require("process");



const addDept = (cb) => {
    inq.prompt([{
        name: "dept_name",
        type: "input",
        message: "Enter the name of the new department",
    }]).then((answer) => {
        connection.query("INSERT INTO dept (dept_name) VALUE (?)",
            [answer.dept_name],
            (err) => {
                if (err) throw err;
                console.log(
                    `You have added ${answer.dept_name} to dept table.`
                );
                cb();
            }
        );
    })
};


const addEmployee = (cb) => {
    inq.prompt([{

        type: "input",
        message: "Employee First Name",
        name: "first_name",

    },
    {
        type: "input",
        message: "Employee Last Name",
        name: "last_name",

    },
    {
        type: "input",
        message: "Employee Role ID",
        name: "employee_role_id",
    },
    {
        type: "Input",
        message: "Employee Manager ID",
        name: "manager_id"

    }

    ]).then((answer) => {
        connection.query("INSERT INTO employees (first_name, last_name, employee_role_id, manager_id) VALUES (?,?,?,?)",
            [answer.first_name, answer.last_name, answer.employee_role_id, answer.manager_id],
            (err) => {
                if (err) throw err;
                console.log(
                    `You have added ${answer.first_name} ${answer.last_name} to employees table.`
                );
                cb();
            }
        );
    })
};

const addRole = (cb) => {
    connection.query("SELECT * from dept", (err, rows) => {
        const depts = rows.map((row) => {
            return {
                name: row.dept_name,
                value: row.dept_id,
            };
        });
        inq.prompt([
            {
                name: "title",
                type: "input",
                message: "Title of role being added",
            },
            {
                name: "salary",
                type: "input",
                message: "Salary of new role",
            },
            {
                name: "dept_id",
                type: "list",
                message: "Choose department",
                choices: depts,
            },
        ]).then((answer) => {
            connection.query("INSERT INTO company_role (title, salary, dept_id) VALUES (?,?,?)",
                [answer.title, answer.salary, answer.dept_id],
                (err) => {
                    if (err) throw err;
                    console.log(
                        `You have added ${answer.title} to company_role table.`
                    );
                    cb();
                }
            );
        })
    });
}
module.exports = { addEmployee, addDept, addRole };