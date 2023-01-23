const { Product } = require('../models');

const productData = [
  {
    product_name: 'Tuxedo T-Shirt',
    price: 19.99,
    stock: 8,
    category_id: 1,
    user_id: 1,
  },
  {
    product_name: 'Jean Jacket',
    price: 59.99,
    stock: 10,
    category_id: 1,
    user_id: 2
  },
  {
    product_name: 'CD Player',
    price: 19.99,
    stock: 9,
    category_id: 2,
    user_id: 3
  },
  {
    product_name: 'iPad',
    price: 199.99,
    stock: 2,
    category_id: 2,
    user_id: 1
  },
  {
    product_name: 'Hawaiian Shirt',
    price: 39.99,
    stock: 5,
    category_id: 1,
    user_id: 2
  },
  {
    product_name: 'Solid Wood Table',
    price: 149.99,
    stock: 3,
    category_id: 3,
    user_id: 3
  },
  {
    product_name: 'Hawaiian Shirt',
    price: 39.99,
    stock: 5,
    category_id: 1,
    user_id: 1
  },
  {
    product_name: 'Solid Wood Chair',
    price: 49.99,
    stock: 10,
    category_id: 3,
    user_id: 2
  },
  {
    product_name: 'BluRay Player',
    price: 39.99,
    stock: 2,
    category_id: 2,
    user_id: 3
  },
  {
    product_name: 'Jean Shorts',
    price: 124.99,
    stock: 9,
    category_id: 1,
    user_id: 1
  },
  {
    product_name: 'Coffee Table',
    price: 89.99,
    stock: 2,
    category_id: 3,
    user_id: 2
  },
  {
    product_name: 'La-Z Boy Recliner',
    price: 149.99,
    stock: 1,
    category_id: 3,
    user_id: 3
  },
  {
    product_name: 'Greek Fisherman\'s Hat',
    price: 49.99,
    stock: 7,
    category_id: 1,
    user_id: 1
  },
  {
    product_name: 'Liquor Cart',
    price: 179.99,
    stock: 2,
    category_id: 3,
    user_id: 2
  },
  {
    product_name: 'Lava Lamp',
    price: 39.99,
    stock: 5,
    category_id: 3,
    user_id: 3
  },
  {
    product_name: 'Jumpsuit XL',
    price: 49.99,
    stock: 2,
    category_id: 1,
    user_id: 1
  },
  {
    product_name: 'Overalls XL',
    price: 49.99,
    stock: 6,
    category_id: 1,
    user_id: 2
  },
  {
    product_name: 'Flatscreen TV 60\"',
    price: 499.99,
    stock: 1,
    category_id: 2,
    user_id: 3
  },
  {
    product_name: 'Love-Seat Black Leather',
    price: 449.99,
    stock: 1,
    category_id: 3,
    user_id: 1
  },
  {
    product_name: 'Biker Jacket Leather',
    price: 199.99,
    stock: 2,
    category_id: 1,
    user_id: 2
  },
  {
    product_name: 'Vintage Record Player',
    price: 99.99,
    stock: 1,
    category_id: 3,
    user_id: 3
  },
  {
    product_name: 'Hula Skirt',
    price: 29.99,
    stock: 2,
    category_id: 1,
    user_id: 1
  },
  {
    product_name: 'Vintage Dresser',
    price: 109.99,
    stock: 1,
    category_id: 3,
    user_id: 2
  },
  {
    product_name: 'German Hunters Hat',
    price: 69.99,
    stock: 2,
    category_id: 1,
    user_id: 3
  },
  {
    product_name: 'Table Large',
    price: 89.99,
    stock: 3,
    category_id: 3,
    user_id: 1
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
