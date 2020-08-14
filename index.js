const { prompt } = require('inquirer');
const colors = require('colors');
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
});
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
    console.table([
      { name: 'James P. Sullivan' },
      { name: 'Mike Wazowski' },
      { name: 'Randall Boggs' },
    ]);
  })
  .catch((error) => {
    console.log(error);
  });
