//function renders the license chosens badge.  returns blank if none.
function renderLicenseBadge(license) {
  if (license == "MIT License") {
    return `![${license}](https://img.shields.io/badge/license-MIT-green)`;
  } else if (license == "ISC License") {
    return `![${license}](https://img.shields.io/badge/license-ISC-orange)`;
  } else if (license == "Apache License 2.0") {
    return `![${license}](https://img.shields.io/badge/license-Apache_2.0-blue)`;
  } else if (license == "GNU General Public License v3.0") {
    return `![${license}](https://img.shields.io/badge/license-GNU_3.0-ff69b4)`;
  } else {
    return ``;
  }
}
//function renders the link to the user's chosen license.  returns blank if none.
function renderLicenseLink(license) {
  if (license == "MIT License") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === "ISC License") {
    return `https://opensource.org/licenses/ISC`;
  } else if (license == "Apache License 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license == "GNU General Public License v3.0") {
    return `https://opensource.org/licenses/GPL-3.0`;
  } else {
    return ``;
  }
}

//function that returns the license section of README.  returns blank if none.
function renderLicenseSection(license) {
  if (license) {
    return `License used for this project: [${license}](${renderLicenseLink(
      license
    )})\n Please refer to the license section of my REPO if additional information is needed`;
  } else return ``;
}

//function generates markdown template for README
function generateMarkdown(response) {
  return `
  # ${response.questionsTitle}

  ${renderLicenseBadge(response.questionsLicense)}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${response.questionsDescr}

## Installation
${response.questionsInstall}

## Usage
${response.questionsUsage}

## License
${renderLicenseSection(response.questionsLicense)}

## Contributing
${response.questionsContribution}

## Testing
${response.questionsTesting}

## Questions
Questions? Feel free to get in touch:
\n GitHub: https://github.com/${response.questionsGitHubUser}
\n Email: ${response.questionsEmailAddress}

`;
}
//export generateMarkdown function data.  will be pulled in by index.js
module.exports = generateMarkdown;
