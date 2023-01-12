// import models
const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product,{
  foreignKey:'category_id',
  onDelete:'CASCADE',
})

// products belong to users
Product.belongsTo(User,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

// users have many products
User.hasMany(Product,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})



module.exports = {
  Product,
  Category,
  User,
};
