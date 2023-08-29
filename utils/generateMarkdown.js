// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === agpl){
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  }else if (data.license === apache){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }else if (data.license === mit){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }else{
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === agpl){
    return '[GNU AGPLv3 License](https://www.gnu.org/licenses/agpl-3.0.en.html)';
  }else if (data.license === apache){
    return '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
  }else if (data.license === mit){
    return '[MIT License](https://opensource.org/licenses/MIT)';
  }else{
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License') {
    return `This project is licensed under the ${license === 'mit' ? 'an' : 'a'} ${license.toUpperCase()} License.`;
  }else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseLink = renderLicenseLink(answers.license);
  const licenseSection = renderLicenseSection(answers.license);

  return `
  # ${answers.title}

  ## Description

  ${answers.description}

  ## Table of Contents

  ${answers.tableOfContents}

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## License

  ${answers.licenseBadge}
  ${answers.licenseLink}
  ${answers.licenseSection}

  ## Contributing

  ${answers.contributing}

  ## Test

  ${answers.test}
`;
}

module.exports = generateMarkdown;
