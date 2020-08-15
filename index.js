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
    message: 'Please select your role',
    choices: ['Customer'],
    name: 'command',
  },
])
  .then(({ command }) => {
    start(command);
  })
  .catch((error) => {
    console.log(error);
  });

function start(command) {
  switch (command) {
    case 'Customer':
      console.log('hello customer');
      break;
  }
}
