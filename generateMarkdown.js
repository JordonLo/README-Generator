function renderLicenseBadge(license) {
  const badge = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    gnuplv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  return badge;
}

function renderLicenseLink(license) {
  const licenseLinks = {
    isc: '[ISC](https:/choosealicense.com/licenses/isc/#)',
    mit: '[mit](https://choosealicense.com/licenses/mit/#)',
    gnuplv3: '[gnuplv3](https://choosealicense.com/licenses/gpl-3.0/)'
  }
  return licenseLinks;
}

function renderLicenseSection(license) {
  if (license) {
    return 'License under ${responses.license}'
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  
  ## Table of Contents
  * [installation](#installation)
  * [usage](#usage)
  * [contributions](#contributions)
  * [testing](#testing)
  * [license](#license)
  * [git](#git)
  * [email](#email)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributions
  ${data.contributions}
  ## Tests
    ${data.testing}
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.git}
`;
}

module.exports = generateMarkdown;
