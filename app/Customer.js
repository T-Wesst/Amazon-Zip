const { prompt } = require('inquirer');
const data = require('../data.json');

module.exports = {
  enterStore: function () {
    console.log('Welcome to Amazon Zip');
    prompt([
      {
        type: 'list',
        message: 'what would you like to do?',
        choices: ['View my Cart', 'Place an Order', 'Exit'],
        name: 'choice',
      },
    ]).then(({ choice }) => {
      switch (choice) {
        case 'Exit':
          exit();
          break;
        case 'View my Cart':
          viewCart();
          break;
        case 'Place an Order':
          placeOrder();
          break;
      }
    });
  },
};

function exit() {
  console.log('Thanks for stopping by, see you next time!');
}

function viewCart() {
  console.log('This is what is currently in your cart');
  console.table(data);
}

function placeOrder() {
  console.log('placing order');
}
