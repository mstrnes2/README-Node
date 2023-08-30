// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'agpl'){
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  }else if (license === 'apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }else if (license === 'mit'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }else{
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license'){
    return `- [License](#license)`
  }else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `## License\nThis project is licensed under the ${license === 'mit' ? 'an' : 'a'} ${license.toUpperCase()} License.`;
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

  ${licenseBadge}

  ## Description

  ${answers.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseLink}
  - [Contributing](#contributing)
  - [Test](#test)
  - [Question](#questions)

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ${licenseSection}

  ## Contributing

  ${answers.contributing}

  ## Test

  ${answers.test}

  ## Questions

  If you have any questions, please email me at: ${answers.email}

  If you would like to see more of my work, my GitHub link is [${answers.github}](https://github.com/${answers.github})
`;
}

module.exports = generateMarkdown;
