const inquirer = require("inquirer")
async function employeeRouter() {
    const { choice } = await inquirer.prompt([{
        type: "list",
        name: "choice",
        message: " what would you like to do? ",
        choices: ["view all employees", "view all departments", "view employees by department", "none"]
    }]);

    console.log(choice)
    switch (choice) {
        case "view all employees":
            viewAllEmployees();
            break;
        case "view all departments":
            viewAllDepartments();
            break;
        case "view employees by department":
            viewEmployeesByDepartment();
            break;
        default:
            () => {
                console.log("goodbye")
            }
    }
}

function viewAllEmployees() {
    console.log("add code to view Employees")
    employeeRouter();
}

function viewAllDepartments() {
    console.log("add code to view Departments");
    employeeRouter();
}

function viewEmployeesByDepartment() {
    console.log("add code to view Employees by Department");
    employeeRouter();
}




employeeRouter();