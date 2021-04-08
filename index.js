// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
// const Enginner = require('./lib/Engineer');
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
            console.log(data);
        });
};

const createTeam = teamMember => {
    let team = [];
    team.push(teamMember);
    console.log(team);
};

createTeam();
