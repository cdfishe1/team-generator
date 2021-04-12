// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const createHtml = require('./dist/createHtml');
const fs = require('fs');

let team = [];

const validateName = name => {
    return name !== '' || 'Please enter a name.';
}


const init = () => {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
        validate: validateName,
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
      team.push(manager);
      addTeamMember();
      
  });
}


//Asks to create another team member
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
                renderTeam();
            }
        });
};

//Prompts to create engineer
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
            team.push(engineer);
            moreTeamMembers();
            
        });
}

//Prompts to create intern
const createIntern = () => {
    inquirer
        .prompt([
            {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            // validate: function (input) { 
            //     if(input !== typeof string) {
            //         return 'You must enter a name'
            //     }
            // }
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
                name: 'school',
            
            },
        ])
        .then((data) => {
            let intern = new Intern(data.name, data.id, data.email, data.school);
            team.push(intern);
            moreTeamMembers();
            
        });
}

//Asks if addtional team members should be added
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
                renderTeam();
            }
            
        });
}

//Takes all classes pushed into the team array, and passes that into the createCard function to write the html file
const renderTeam = () => {
  let mockHtml =  createHtml(team);
  fs.writeFileSync('index.html', mockHtml, function(err) {

  })
 };

init();