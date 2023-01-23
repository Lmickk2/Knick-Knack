const { Product } = require('../models');

const productData = [
  {
    product_name: 'Tuxedo T-Shirt',
    price: 19.99,
    stock: 8,
    filename: "https://i5.walmartimages.com/asr/2bb29b10-97bf-44ac-9c72-c15a12c3fec9_1.c40737bac530e78251815a88a46d7bb5.jpeg",
    product_description: "Introducing the Tuxedo T-Shirt, the perfect blend of formal and casual style. Made from high-quality, comfortable material, this shirt features a sleek black and white tuxedo print on the front, complete with a faux bowtie and pocket square.",
    category_id: 1,
    user_id: 1,
  },
  {
    product_name: 'Jean Jacket',
    price: 59.99,
    stock: 10,
    filename: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWn-1JXYlwH0Rv-2osEwrQU5nSmh0LNwIxuhCwvQRCejEinjhVACBLnMvC0XzqHSrD7Q&usqp=CAU",
    product_description: "The perfect addition to any wardrobe. Made from high-quality denim material, this jacket features a timeless design with a button-up front, two chest pockets and two side pockets.",
    category_id: 1,
    user_id: 2
  },
  {
    product_name: 'CD Player',
    price: 19.99,
    stock: 9,
    filename: "https://ae01.alicdn.com/kf/Hf6008547e4504c309806161235de5f08X.jpg",
    product_description: "The CD player features a sleek and compact design, making it easy to transport and store. It has a top-loading disc tray and a digital display, making it easy to navigate your music.",
    category_id: 2,
    user_id: 3
  },
  {
    product_name: 'iPad',
    price: 199.99,
    stock: 2,
    filename: "https://www.apple.com/newsroom/images/product/ipad/standard/Apple_iPad-mini_hero_09142021_big.jpg.large.jpg",
    product_description: "This device features a large, high-resolution touchscreen display, making it perfect for browsing the web, watching videos, playing games, and reading e-books.",
    category_id: 2,
    user_id: 1
  },
  {
    product_name: 'Hawaiian Shirt',
    price: 39.99,
    stock: 5,
    filename: "https://m.media-amazon.com/images/I/81iiactrrIL._AC_SL1500_.jpg",
    product_description: "A fun and colorful addition to your wardrobe. Made from high-quality, lightweight material, this shirt features a tropical floral or palm tree print",
    category_id: 1,
    user_id: 2
  },
  {
    product_name: 'Solid Wood Table',
    price: 149.99,
    stock: 3,
    filename: "https://rcsuppliesonline.com/wp-content/uploads/2019/11/IMME.jpg",
    product_description: "The natural wood grain patterns and finish give it a warm, rustic look that will complement any home decor.",
    category_id: 3,
    user_id: 3
  },
  {
    product_name: 'BluRay Player',
    price: 39.99,
    stock: 2,
    filename: "https://m.media-amazon.com/images/I/61khzcoLFgL.jpg",
    product_description: "A high-definition, disc-playing device that allows you to enjoy your favorite movies and TV shows in stunning, cinematic quality. ",
    category_id: 2,
    user_id: 3
  },
  {
    product_name: 'Jean Shorts',
    price: 124.99,
    stock: 9,
    filename: "https://cdn-images.farfetch-contents.com/14/16/01/84/14160184_18904041_600.jpg",
    product_description: "",
    category_id: 1,
    user_id: 1
  },
  {
    product_name: 'Coffee Table',
    price: 89.99,
    stock: 2,
    filename: "https://secure.img1-cg.wfcdn.com/im/88557727/compr-r85/7108/71087370/kelmscott-coffee-table.jpg",
    product_description: "",
    category_id: 3,
    user_id: 2
  },
  {
    product_name: 'La-Z Boy Recliner',
    price: 149.99,
    stock: 1,
    filename: "http://mobileimages.lowes.com/productimages/4354a76e-02b7-4c67-b9c6-677e174a13d0/15005683.jpg",
    product_description: "",
    category_id: 3,
    user_id: 3
  },
  {
    product_name: 'Fishermans Hat',
    price: 49.99,
    stock: 7,
    filename: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmKl7ydL6-YVpE_whsjGjA0Bv3nQChAdQDA&usqp=CAU",
    product_description: "",
    category_id: 1,
    user_id: 1
  },
  {
    product_name: 'Liquor Cart',
    price: 179.99,
    stock: 2,
    filename: "https://ak1.ostkcdn.com/images/products/is/images/direct/7ad9c0662b87de28b1c7daa531febcd00ce7838f/Metropolitan-Mirrored-Glass-Top-Metal-Bar-Cart-by-iNSPIRE-Q-Bold.jpg",
    product_description: "",
    category_id: 3,
    user_id: 2
  },
  
  // {
  //   product_name: 'Jumpsuit XL',
  //   price: 49.99,
  //   stock: 2,
  //   filename: "https://i5.walmartimages.com/asr/2bb29b10-97bf-44ac-9c72-c15a12c3fec9_1.c40737bac530e78251815a88a46d7bb5.jpeg",
  //   category_id: 1,
  //   user_id: 1
  // },
  // {
  //   product_name: 'Overalls XL',
  //   price: 49.99,
  //   stock: 6,
  //   filename: "https://i5.walmartimages.com/asr/2bb29b10-97bf-44ac-9c72-c15a12c3fec9_1.c40737bac530e78251815a88a46d7bb5.jpeg",
  //   category_id: 1,
  //   user_id: 2
  // },
  // {
  //   product_name: 'Flatscreen TV 60\"',
  //   price: 499.99,
  //   stock: 1,
  //   filename: "https://i5.walmartimages.com/asr/2bb29b10-97bf-44ac-9c72-c15a12c3fec9_1.c40737bac530e78251815a88a46d7bb5.jpeg",
  //   category_id: 2,
  //   user_id: 3
  // },
  // {
  //   product_name: 'Love-Seat Black Leather',
  //   price: 449.99,
  //   stock: 1,
  //   filename: "https://i5.walmartimages.com/asr/2bb29b10-97bf-44ac-9c72-c15a12c3fec9_1.c40737bac530e78251815a88a46d7bb5.jpeg",
  //   category_id: 3,
  //   user_id: 1
  // },
  // {
  //   product_name: 'Biker Jacket Leather',
  //   price: 199.99,
  //   stock: 2,
  //   filename: "https://i5.walmartimages.com/asr/2bb29b10-97bf-44ac-9c72-c15a12c3fec9_1.c40737bac530e78251815a88a46d7bb5.jpeg",
  //   category_id: 1,
  //   user_id: 2
  // },
  // {
  //   product_name: 'Vintage Record Player',
  //   price: 99.99,
  //   stock: 1,
  //   filename: "https://i5.walmartimages.com/asr/2bb29b10-97bf-44ac-9c72-c15a12c3fec9_1.c40737bac530e78251815a88a46d7bb5.jpeg",
  //   category_id: 3,
  //   user_id: 3
  // },
  // {
  //   product_name: 'Hula Skirt',
  //   price: 29.99,
  //   stock: 2,
  //   filename: "https://i5.walmartimages.com/asr/2bb29b10-97bf-44ac-9c72-c15a12c3fec9_1.c40737bac530e78251815a88a46d7bb5.jpeg",
  //   category_id: 1,
  //   user_id: 1
  // },
  // {
  //   product_name: 'Vintage Dresser',
  //   price: 109.99,
  //   stock: 1,
  //   filename: "https://i5.walmartimages.com/asr/2bb29b10-97bf-44ac-9c72-c15a12c3fec9_1.c40737bac530e78251815a88a46d7bb5.jpeg",
  //   category_id: 3,
  //   user_id: 2
  // },
  // {
  //   product_name: 'German Hunters Hat',
  //   price: 69.99,
  //   stock: 2,
  //   filename: "https://i5.walmartimages.com/asr/2bb29b10-97bf-44ac-9c72-c15a12c3fec9_1.c40737bac530e78251815a88a46d7bb5.jpeg",
  //   category_id: 1,
  //   user_id: 3
  // },
  // {
  //   product_name: 'Table Large',
  //   price: 89.99,
  //   stock: 3,
  //   filename: "https://i5.walmartimages.com/asr/2bb29b10-97bf-44ac-9c72-c15a12c3fec9_1.c40737bac530e78251815a88a46d7bb5.jpeg",
  //   category_id: 3,
  //   user_id: 1
  // }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
