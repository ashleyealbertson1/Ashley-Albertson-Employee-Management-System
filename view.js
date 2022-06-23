const connection = require("../dbConnect");

const viewAllDepts = (cb) => {
    connection.query('SELECT * from dept', (err, data) => {
        if (err) throw err;
        console.table(data);
        cb();
    });
}

const viewAllEmployees = (cb) => {
    connection.query('SELECT * from employees', (err, data) => {
        if(err) throw err;
        console.table(data);
        cb();
    })
}

const viewAllRoles = (cb) => {
    connection.query('SELECT * from company_role', (err, data) => {
        if(err) throw (err);
        console.table(data);
        cb();
    })
};

module.exports = { viewAllRoles, viewAllEmployees, viewAllDepts };