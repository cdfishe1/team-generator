const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(gitHub) {
        this.gitHub = gitHub;

        super(name, id, email);
        
        Manager.getRole('Engineer');

    }
};



module.exports = Engineer;