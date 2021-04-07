const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;

        super(name, id, email);
        
        Manager.getRole('Manager');

    }
};



module.exports = Manager;