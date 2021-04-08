const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;

        

        
    }

    getGithub() {
        return this.getGithub;
    }
};

Engineer.getName();
Engineer.getId();
Engineer.getEmail();



module.exports = Engineer;