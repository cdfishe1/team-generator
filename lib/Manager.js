const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;

        super(name, id, email);

        

    }

    getofficeNumber() {
        return this.officeNumber;
    }
};

Manager.getName();
Manager.getId();
Manager.getEmail();
Manager.getRole();



module.exports = Manager;