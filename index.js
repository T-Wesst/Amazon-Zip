const { prompt } = require('inquirer');
const { enterStore } = require('./app/Customer');
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
]).then(({ command }) => {
  start(command);
});

function start(command) {
  switch (command) {
    case 'Customer':
      enterStore();
      break;
  }
}
