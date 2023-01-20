const { User } = require('../models');

const userData = [
  {
    name: 'Joe Browm',
    email: 'joebrown@example.com',
    password: 'password111'
  },
  {
    name: 'Jennifer Green',
    email: 'jennifergreen@example.com',
    password: 'password222'
  },
  {
    name: 'Robert Wilson',
    email: 'robertwilson@example.com',
    password: 'password333'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
