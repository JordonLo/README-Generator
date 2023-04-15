// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  const badges = {
    mit: '[![License: LGPL v3](https:/img.shields.io/badge/License-LGPL_v3-blue.svg)](htpps:/www.gnu.org/licenses/lgpl-3.0)',
    isc: '[![License: LGPL v3](https:/img.shields.io/badge/License-LGPL_v3-blue.svg)](htpps:/www.gnu.org/licenses/lgpl-3.0)',
    gnuplv3: '[![License: LGPL v3](https:/img.shields.io/badge/License-LGPL_v3-blue.svg)](htpps:/www.gnu.org/licenses/lgpl-3.0)'
  }
  return badges[License];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  const licenseLinks = {
    isc: '[ISC](https:/chooselicense.com/licenses/isc/)',
    mit: '[mit](https:/chooselicense.com/licenses/mit/)',
    gnuplv3: '[gnuplv3](https:/chooselicense.com/licenses/gnuplv3/)'
  }
  return licenseLinks[License];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License) {
    return 'License under the ${this.renderLicenseLink(License)} license'
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(mark) {
  generateReadme(answers) 
    return `
 # ${answers.title}

 ${this.renderLicenseBadge(answers.license)}

 ## Table of Contents
 - [Project description](#description)
 - [Usage](#usage)
 -[Contributions](#contributions)
 -[Installation](#installation)
 -[Questions](#questions)
 -[License](#license)

 ## Description
 $(answers.description)

 ## Usage
 $(answers.usage)

 ## Installation
 $(answers.installation)

 ## Contributions
 $(answers.contributions)

 ## Questions
 $(answers.email)
 $(answers.github)

 ## License
 $(this.renderLicenseSection(answers.license))

`
  }


module.exports = generateMarkdown;
