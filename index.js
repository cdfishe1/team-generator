// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const createCard = require('./dist/createCard');
const fs = require('fs');

// const util = require('util');
// const writeFileAsync = util.promisify(fs.writeFile);
// const fs = require('fs');


let team = [];



//Begin manager prompt
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
    team.push(manager);
    addTeamMember();
    
  //  var fakedHtml =  createCard(manager);
  //   fs.writeFileSync('manager.html', fakedHtml, function(err) {

  //   })
    //team.push(manager);
     // .then(() => console.log('Successfully wrote to README.md'))
      //.catch((err) => console.error(err));
    // addTeamMember();
    
});

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

// //Prompts to create intern
// const createIntern = () => {
//     inquirer
//         .prompt([
//             {
//             type: 'input',
//             name: 'name',
//             message: "What is the intern's name?",
//             },
//             {
//             type: 'input',
//             message: "What is the intern's ID number?",
//             name: 'id',
            
//             },
//             {
//             type: 'input',
//             message: "What is the intern's email address?",
//             name: 'email',
            
//             },

//             {
//                 type: 'input',
//                 message: "What is the intern's school?",
//                 name: 'github',
            
//             },
//         ])
//         .then((data) => {
//             let intern = new Intern(data.name, data.id, data.email, data.school);
//             createTeam(intern);
//             moreTeamMembers();
            
//         });
// }

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


const renderTeam = () => {
  let fakedHtml =  createCard(team);
  fs.writeFileSync('index.html', fakedHtml, function(err) {

  })
 };

// console.log(team);
