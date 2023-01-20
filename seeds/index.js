const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');

// add user.js

const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
  
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USER TAGS SEEDED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');



  

  

  process.exit(0);
};

seedAll();
