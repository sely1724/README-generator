// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Describe your project",
  "Add Installation Instructions",
  "Add Usage Instructions",
  "Choose a License",
  "Add Contribution Instructions",
  "Add Testing Instructions",
  "What is your Github Username?",
  "What is your email address?",
];

const fs = require("fs");
const inquirer = require("inquirer");
const markdownTemplate = require("./utils/generateMarkdown");

// TODO: Create a function to write README file
function writeToFile(title, renderedMarkdown) {
  fs.writeFile(title, renderedMarkdown, (err) =>
    err ? console.error(err) : console.log("README generated")
  );
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

inquirer
  .prompt([
    {
      type: "input",
      message: questions[0],
      name: "questionsTitle",
    },
    {
      type: "input",
      message: questions[1],
      name: "questionsDescr",
    },
    {
      type: "input",
      message: questions[2],
      name: "questionsInstall",
    },
    {
      type: "input",
      message: questions[3],
      name: "questionsUsage",
    },
    {
      //license
      type: "list",
      message: questions[4],
      choices: [
        "MIT License",
        "ISC License",
        "Apache License 2.0",
        "GNU General Public License v3.0",
      ],
      name: "questionsLicense",
    },
    {
      type: "input",
      message: questions[5],
      name: "questionsContribution",
    },
    {
      type: "input",
      message: questions[6],
      name: "questionsTesting",
    },
    {
      type: "input",
      message: questions[7],
      name: "questionsGitHubUser",
    },
    {
      type: "input",
      message: questions[8],
      name: "questionsEmailAddress",
    },
  ])
  .then((response) => {
    const title = response.questionsTitle + ".md";
    const renderedMarkdown = markdownTemplate(response);
    writeToFile(title, renderedMarkdown);
  });

//figure out how to REQUIRE RESPONSE in node.
