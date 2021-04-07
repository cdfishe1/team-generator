const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;

        super(name, id, email);
        
        Intern.getRole('Intern');

    }
};



module.exports = Intern;