// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
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
                choices: ['Engineer', 'Intern'],
            },
        ])
        .then((data) => {
            if(data.employee === 'Engineer') {
                createEngineer();
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
            
        });
}

let team = [];
const createTeam = teamMember => {
    team.push(teamMember);
};

console.log(team);
