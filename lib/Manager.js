const Employee = require('../lib/Employee');
// const inquirer = require('inquirer');
// const createManager = require('../dist/script');

class Manager extends Employee {
    constructor(name, id, email, officeNumber,) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        

    }

    getofficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }


    // promptManager() {
    //     inquirer
    //     .prompt([
    //         {
    //         type: 'input',
    //         name: 'name',
    //         message: "What is the manager's name?",
    //         },
    //         {
    //         type: 'input',
    //         message: "What is the manager's ID number?",
    //         name: 'id',
            
    //         },
    //         {
    //         type: 'input',
    //         message: "What is the manager's email address?",
    //         name: 'email',
            
    //         },

    //         {
    //             type: 'input',
    //             message: "What is the manager's office number?",
    //             name: 'office',
            
    //         },
    //     ])
    //     .then((data) => {
    //         createManager(data);
    //     });
    //     }
};

module.exports = Manager;