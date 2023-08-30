// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        name: 'installation',
        message: 'How do you install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project used for?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using for this project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How would someone make contributions to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test the app.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Email: '
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub user name: '
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`${fileName} file generated!`));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);

        writeToFile('README.md', readmeContent);
    });
}


// Function call to initialize app
init();
