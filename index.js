const inquirer = require('inquirer');
const Markdown = require('./generateMarkdown');

const questions = [
  inquirer
  .prompt([
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
        name: 'email',
        message: 'Enter your email URL.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github URL.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'what type of license?',
        choices:['MIT', 'ISC', 'GNUPLv3'],
      },
    ])
    .then((answers) => {
      console.log(answers);
    })

]
// TODO: Create a function to write README file


function runQuery() {
  return inquirer.prompt(questions)
  .then((answers) => {
    const mark = Markdown.generateREADME(answers)
    fs.WriteToFile( 'README.md', mark){
      if(err){
        console.log('Something went wrong');
      }
      else {
        console.log("Success! README file saved to folder");
      }
    };
  })
  .catch((err) => {
    console.log(err);
  })
}

runQuery()

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
