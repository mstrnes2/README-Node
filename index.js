// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Please write a description of your project: ',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Please input a table of contents for the README file: ',
    },
    {
        type: 'input', 
        name: 'installation',
        message: 'How do you install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project used for?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license are you using for this project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How would someone make contributions to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are all the different test that can be performed in this project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: ''
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
