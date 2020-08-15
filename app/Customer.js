const { prompt } = require('inquirer');
const data = require('../data.json');

module.exports = {
  enterStore: function () {
    console.log('Welcome to Amazon Zip');
    prompt([
      {
        type: 'list',
        message: 'what would you like to do?',
        choices: ['View Products', 'View Cart', 'Exit'],
        name: 'choice',
      },
    ]).then(({ choice }) => {
      switch (choice) {
        case 'Exit':
          exit();
          break;
        case 'View Products':
          viewProducts();
          break;
        case 'View Cart':
          viewCart();
          break;
      }
    });
  },
};

function exit() {
  console.log('Thanks for stopping by, see you next time!');
}

function viewProducts() {
  console.log('This is what is currently in your cart');
  console.table(data);
  prompt([
    {
      type: 'list',
      message: 'Which item would you like to purchase?',
      name: 'choice',
      choices: function () {
        let choices = [];
        data.forEach((item) => choices.push(item)); // returns undefined
        return choices;
      },
    },
    {
      type: 'input',
      message: 'How many would you like to purchase?',
      name: 'quantity',
      validate: function (value) {
        if (isNaN(value)) {
          return 'Please enter a valid number';
        }
        return true;
      },
    },
  ]).then(({ quantity }) => console.log(`Processing ${quantity} transactions`));
}

function viewCart() {
  console.log('viewing cart');
}
