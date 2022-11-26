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
  "What is your Github Username?", //might not need in array?
  "What is your email address?",
  //"Table of Contents", //Not Needed - Internally Write
];

const fs = require("fs");
const inquirer = require("inquirer");
const markdownTemplate = require("./utils/generateMarkdown");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}f

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
      name: "questionsGithubUser",
    },
    {
      type: "input",
      message: questions[8],
      name: "questionsEmailAddress",
    },
  ])
  .then((response) => {
    const title = response.questionsTitle;
    const descr = response.questionsDescr;
    const install = response.questionsInstall;
    const usage = response.questionsUsage;
    const license = response.questionsLicense;
    const contrib = response.questionsContribution;
    const testing = response.questionsTesting;
    const userName = response.questionsGithubUser;
    const email = response.questionsEmailAddress;
    const tableofContents = [
      "Description",
      "Installation",
      "Usage",
      "License",
      "Contribution",
      "Testing",
      "GitHub Username",
      "Email",
    ];
    console.log("Hello " + contrib);
  });
