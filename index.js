// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
// const Enginner = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const inquirer = require('inquirer');
// const fs = require('fs');

const managerQuestions = async function(){

 const newManager = new Manager();
 const createManager = await newManager.promptManager();

};

managerQuestions();

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: "What is the manager's name?",
//     },
//     {
//       type: 'input',
//       message: "What is the manager's ID number?",
//       name: 'id',
      
//     },
//     {
//       type: 'input',
//       message: "What is the manager's email address?",
//       name: 'email',
    
//     },

//     {
//         type: 'input',
//         message: "What is the manager's office number?",
//         name: 'office',
      
//       },
//   ])
//   .then((data) => {
//     console.log(data);
//   });