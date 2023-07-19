const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Wnat is the project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the progect?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installations are required?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will the progect be used?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does the project have?',
        choices: ['MIT','APACHE','None']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What kinds of tests does the project require?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github username',
        message: 'What is your github username?'
    }

]

module.exports = questions;