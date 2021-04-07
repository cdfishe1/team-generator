const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        
        this.school = school;

        Intern.getRole('Intern');

    }

    getSchool() {
        return this.school;
    }

};

Intern.getName();
Intern.getId();
Intern.getEmail();

module.exports = Intern;