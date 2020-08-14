const { prompt } = require('inquirer');
prompt([
  {
    type: 'list',
    message: 'What would you like to do?',
    choices: ['multiplication', 'addition', 'subtraction', 'division'],
    name: 'answer',
  },
])
  .then(({ answer }) => {
    console.log(answer);
  })
  .catch((error) => {
    console.log(error);
  });
