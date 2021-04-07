const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, school) {
        this.school = school;
    

        super(name, id, email);
        
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