const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');
const path = require('path');

const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give us a description of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'What was the contributions?',
      },
      {
        type: 'input',
        name: 'testing',
        message: 'What is the testing instructions '
      },
      {
        type: 'list',
        name: 'license',
        message: 'what type of license?',
        choices:['MIT', 'ISC', 'GNUPLv3'],
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email URL.',
      },
      {
        type: 'input',
        name: 'git',
        message: 'Enter your github URL.',
      },
    ];

function init() {
    inquirer
    .prompt(questions).then(data => {
        console.log(data)
        const mkDown = generateMarkdown(data)
        console.log(mkDown)
        fs.writeFile("README.md",mkDown,err => {
            if (err){
                console.error("error");
            }
        } )
    })
}

init();
