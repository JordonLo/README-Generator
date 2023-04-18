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
        name: 'contribution',
        message: 'What was the contribution?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What is the test instructions '
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
        name: 'github',
        message: 'Enter your github URL.',
      },
    ]

function writeToFile (fileName, responses) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), responses);
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md file");
    writeToFile("./dist/README.md", generateMarkdown((responses)));
  });
}

init();
