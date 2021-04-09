// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
// const fs = require('fs');

// const managerQuestions = async function(){

//  const newManager = new Manager();
//  await newManager.promptManager();

// };

// managerQuestions();



inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the manager's name?",
    },
    {
      type: 'input',
      message: "What is the manager's ID number?",
      name: 'id',
      
    },
    {
      type: 'input',
      message: "What is the manager's email address?",
      name: 'email',
    
    },

    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'office',
      
      },
  ])
  .then((data) => {
    let manager = new Manager(data.name, data.id, data.email, data.office);
    createTeam(manager);
    addTeamMember();
});


const addTeamMember = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What employee would you like to add?',
                name: 'employee',
                choices: ['Engineer', 'Intern', "I don't wish to add another team member"],
            },
        ])
        .then((data) => {
            if(data.employee === 'Engineer') {
                createEngineer();
            } else if (data.employee === 'Intern') {
                createIntern();
            } else {
                return;
            }
        });
};

const createEngineer = () => {
    inquirer
        .prompt([
            {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            },
            {
            type: 'input',
            message: "What is the engineer's ID number?",
            name: 'id',
            
            },
            {
            type: 'input',
            message: "What is the engineer's email address?",
            name: 'email',
            
            },

            {
                type: 'input',
                message: "What is the engineer's GitHub id?",
                name: 'github',
            
            },
        ])
        .then((data) => {
            let engineer = new Engineer(data.name, data.id, data.email, data.github);
            createTeam(engineer);
            moreTeamMembers();
            
        });
}

const createIntern = () => {
    inquirer
        .prompt([
            {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            },
            {
            type: 'input',
            message: "What is the intern's ID number?",
            name: 'id',
            
            },
            {
            type: 'input',
            message: "What is the intern's email address?",
            name: 'email',
            
            },

            {
                type: 'input',
                message: "What is the intern's school?",
                name: 'github',
            
            },
        ])
        .then((data) => {
            let intern = new Intern(data.name, data.id, data.email, data.school);
            createTeam(intern);
            moreTeamMembers();
            
        });
}

const moreTeamMembers = () => {
    inquirer
        .prompt([
            {
            type: 'list',
            name: 'more',
            message: "Do you wish to add another team member?",
            choices: ['Yes', 'No'],
            }
            
        ])
        .then((data) => {
            if(data.more === 'Yes') {
                addTeamMember();
            } else {
                return;
            }
            
        });
}

let team = [];
const createTeam = teamMember => {
    team.push(teamMember);
};

console.log(team);
