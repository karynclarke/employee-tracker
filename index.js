const inquirer = require("inquirer")
const DB = require("./employees/index");
const { printTable } = require("console-table-printer");

function mainMenu() {
    inquirer
        .prompt([{
            type: "list",
            name: "mainMenu",
            message: "What would you like to Do?",
            choices: [
                "View Employees",
                "View Positions",
                "View Departments",
                "Exit",
            ],
        }, ])
        .then(function(answers) {
            switch (answers.mainMenu) {
                case "View Employees":
                    Employee_Prompts();
                    break;
                case "View Positions":
                    Role_Prompts();
                    break;
                case "View Departments":
                    Department_Prompts();
                    break;
                default:
                    goodBye();
            }
        });
}

function Employee_Prompts() {
    inquirer
        .prompt([{
            type: "list",
            name: "employeeMenu",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "Add Employee",
                "List Employees by Department",
                "Exit",
            ],
        }, ])
        .then((answer) => {
            switch (answer.employeeMenu) {
                case "View All Employees":
                    View_All_Employees();
                    break;
                case "Add Employee":
                    Add_Employee();
                    break;
                case "List Employees by Department":
                    List_Employees_By_Department();
                    break;
                default:
                    goodBye();
            }
        });
}

function Role_Prompts() {
    inquirer
        .prompt([{
            type: "list",
            name: "rolesMenu",
            message: "What would you like to do?",
            choices: ["View All Positions", "Add a New Position", "Exit"],
        }, ])
        .then((answer) => {
            switch (answer.rolesMenu) {
                case "View All Positions":
                    View_All_Roles();
                    break;
                case "Add a New Position":
                    Add_Role();
                    break;
                default:
                    goodBye();
            }
        });
}

function Department_Prompts() {
    inquirer
        .prompt([{
            type: "list",
            name: "departmentMenu",
            message: "What would you like to do?",
            choices: ["View All Departments", "Add a New Department", "Exit"],
        }, ])
        .then((answer) => {
            switch (answer.departmentMenu) {
                case "View All Departments":
                    View_All_Departments();
                    break;
                case "Add a New Department":
                    Add_Department();
                    break;
                default:
                    goodBye();
            }
        });
}
//works 8/19/2020
function View_All_Employees() {
    console.log("Here are your employees:");
    DB.viewAllEmployees().then(function(response) {
        printTable(response);
        mainMenu();
    });
}
const View_All_Departments = () => {
    console.log("Here are the departments:");
    DB.viewAllDepartments().then(function(res) {
        printTable(res);
        mainMenu();
    });
};
const View_All_Roles = () => {
    console.log("Here are the positions:");
    DB.viewAllRoles().then((data) => {
        printTable(data);
        mainMenu();
    });
};

async function List_Employees_By_Department() {
    const departments = await DB.findAllDepartments();
    const departmentArray = departments.map(({ id, name }) => ({
        name: name,
        value: id,
    }));
    inquirer
        .prompt([{
            type: "list",
            name: "departmentChoice",
            message: "Which department would you like to see?",
            choices: departmentArray,
        }, ])
        .then(function(response) {
            console.log(response.departmentChoice);
            DB.listEmployeesByDepartment().then(function(response) {
                printTable(response);

            });
        });
}
// console.log(" this in the index outside of employees")
//for adding stuff

async function Add_Department() {
    const departments = await DB.viewAllDepartments();
    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id,
    }));

    inquirer
        .prompt([{
            type: "input",
            name: "departmentName",
            message: "What is the name of the new department?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                }
                return "Please do not leave this field blank";
            },
        }, ])
        .then(function(answers) {
            DB.addDepartment(answers.departmentName).then((response) => {
                console.log(response);
                View_All_Departments();
            })
        });
}
async function Add_Role() {
    const departments = await DB.viewAllDepartments();
    const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id,
    }));
    inquirer
        .prompt([{
                type: "input",
                name: "title",
                message: "what is the title for this postion?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please do not leave this field blank";
                },
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary for this position?",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return "Please enter a positive number greater than zero.";
                },
            },
            {
                type: "list",
                name: "departmentID",
                message: "Which department is assigned this position?",
                choices: departmentChoices,
            },
        ])
        .then((answers) => {
            DB.addRole(answers.title, answers.salary, answers.departmentID).then(
                function(response) {
                    console.log(response);
                    View_All_Roles();
                }
            );
        });
}
async function Add_Employee() {
    const roles = await DB.viewAllRoles();
    console.log("roles")
        //makes the array of roles grow as we add new roles
    const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id,
    }));

    inquirer
        .prompt([{
                type: "input",
                name: "firstName",
                message: "What is the employee's first name?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please do not leave this field blank";
                },
            },
            {
                type: "input",
                name: "lastName",
                message: "What is the employee's last name?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please do not leave this field blank";
                },
            },
            {
                type: "list",
                name: "roleID",
                message: "what is this employee's position?",
                choices: roleChoices,
            },
        ])
        .then(function(answers) {
            DB.addEmployee(
                answers.firstName,
                answers.lastName,
                answers.roleID
            ).then(function(response) {
                console.log(response);
                View_All_Employees();
            });
        });
}

function goodBye() {
    console.log("Good-bye!");
    process.exit();
}

mainMenu();