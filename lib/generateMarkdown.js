const { writeFile } = require('fs');

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let output = `
  # ${data.title}

  ${data.license == 'None' ? '' : `![badmath](https://img.shields.io/badge/License-${data.license}-blue)`}

## Description
${data.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}


## Credits
${data.contributing}

## License

${data.license == 'None' ? '' : `![badmath](https://img.shields.io/badge/License-${data.license}-blue)`}

## Tests
${data.tests}

## Questions
[GITHUB](https://github.com/${data.github})

[EMAIL](mailto:${data.email})
  `;

  writeFile('dist/README.md', output, err=> {
    if(err) throw err;

    console.log('README file created in dist/!!!');
  })
}

module.exports = generateMarkdown;
