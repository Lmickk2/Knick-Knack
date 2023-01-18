const { Product } = require('../models');

const productData = [
  {
    product_name: 'Tuxedo T-Shirt',
    price: 19.99,
    stock: 8,
    category_id: 1,
    user_id: 
  },
  {
    product_name: 'Jean Jacket',
    price: 59.99,
    stock: 10,
    category_id: 1,
    user_id: 
  },
  {
    product_name: 'CD Player',
    price: 19.99,
    stock: 9,
    category_id: 2,
    user_id: 
  },
  {
    product_name: 'iPad',
    price: 199.99,
    stock: 2,
    category_id: 2,
    user_id: 
  },
  {
    product_name: 'Hawaiian Shirt',
    price: 39.99,
    stock: 5,
    category_id: 1,
    user_id: 
  },
  {
    product_name: 'Solid Wood Table',
    price: 149.99,
    stock: 3,
    category_id: 3,
    user_id: 
  },
  {
    product_name: 'Hawaiian Shirt',
    price: 39.99,
    stock: 5,
    category_id: 1,
    user_id: 
  },
  {
    product_name: 'Solid Wood Chair',
    price: 49.99,
    stock: 10,
    category_id: 3,
    user_id: 
  },
  {
    product_name: 'BluRay Player',
    price: 39.99,
    stock: 2,
    category_id: 2,
    user_id: 
  },
  {
    product_name: 'Jean Shorts',
    price: 124.99,
    stock: 9,
    category_id: 1,
    user_id: 
  },
  {
    product_name: 'Coffee Table',
    price: 89.99,
    stock: 2,
    category_id: 3,
    user_id: 
  },
  {
    product_name: 'La-Z Boy Recliner',
    price: 149.99,
    stock: 1,
    category_id: 3,
    user_id: 
  },
  {
    product_name: 'Greek Fisherman\'s Hat',
    price: 49.99,
    stock: 7,
    category_id: 1,
    user_id: 
  },
  {
    product_name: 'Liquor Cart - Bar',
    price: 179.99,
    stock: 2,
    category_id: 3,
    user_id: 
  },
  {
    product_name: 'Lava Lamp',
    price: 39.99,
    stock: 5,
    category_id: 3,
    user_id: 
  },
  {
    product_name: '',
    price: 124.99,
    stock: 5,
    category_id: 3,
    user_id: 
  },
  {
    product_name: 'SubWoofer',
    price: 124.99,
    stock: 5,
    category_id: 3,
    user_id: 
  },
  {
    product_name: 'SubWoofer',
    price: 124.99,
    stock: 5,
    category_id: 3,
    user_id: 
  },
  {
    product_name: 'SubWoofer',
    price: 124.99,
    stock: 5,
    category_id: 3,
    user_id: 
  },
  {
    product_name: 'SubWoofer',
    price: 124.99,
    stock: 5,
    category_id: 3,
    user_id: 
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
