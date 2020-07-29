// const mysql = require("mysql");
// const { networkInterfaces } = require("os");
// const inquirer = require("inquirer");
// const cTable = require("console.table")

// const connection = mysql.createConnection({
//     host: "localhost",

//     // Your port; if not 3306
//     port: 3306,

//     // Your username
//     user: "root",

//     // Your password
//     password: "1021Hilyard!",
//     database: "tracker_DB",
// });


// // connect to the mysql server and sql database
// connection.connect(function(err) {
//     if (err) throw err;
//     // run the start function after the connection is made to prompt the user
//     start();
// });

// // functions asking for Employee info
// function start() {
//     inquirer
//         .prompt({
//             name: "firstName",
//             type: "input",
//             message: "First Name of Employee?",
//         })
//         .prompt({
//             name: "lastName",
//             type: "input",
//             message: "Last Name of Employee?"
//         })
// }
// console.log(firstName + lastName);


// //     name: "employeeTitle",
// //         type: "input",
// //         message: "What is the Employee's Job        Title ? "

// //     department: "EmployeeDepartment",
// //         message: "What department is the Employee in?",
// //         type: "input",

// //         salary: "salary",
// //         type: Number,
// //         message: "What is the Employee's Salary?" {
// //             manager: "EmployeeManager",
// //             type: "input",
// //             message: "Who is the Employee's Supervisor?",
// //         

// //







// connection.end()