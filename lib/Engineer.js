const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(gitHub) {
        this.gitHub = gitHub;

        super(name, id, email);

        
    }

    getGithub() {
        return this.getGithub;
    }
};

Engineer.getName();
Engineer.getId();
Engineer.getEmail();



module.exports = Engineer;