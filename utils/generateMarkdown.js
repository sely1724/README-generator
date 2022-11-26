// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

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
${response.questionsLicense}

## Contributing
${response.questionsContribution}

## Testing
${response.questionsTesting}

## Questions
Questions? Feel free to get in touch:
GitHub: https://github.com/${response.questionsGitHubUser}
Email: ${response.questionsEmailAddress}

`; //add direct email link???
}

module.exports = generateMarkdown;
