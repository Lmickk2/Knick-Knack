const router = require('express').Router();
const { Product, Category, User } = require('../../models');
const withAuth = require('../utils/auth');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
    try {
    const proData = await Product.findAll({
        include: [{ model: Category },{ model: User}],
    });
    res.status(200).json(proData);
    } catch (err) {
    res.status(500).json(err);
    }
});

// get one product
router.get('/:id',async (req, res) => {
  // find a single product by its `id`
    try {
    const proData = await Product.findByPk(req.params.id, {
        include: [{ model: Category },{model: User}], 
    });

    if (!proData) {
        res.status(404).json({ message: 'No tag found with that id!' });
        return;
    }

    res.status(200).json(proData);
    } catch (err) {
    res.status(500).json(err);
    }
});

// create new product
router.post('/',withAuth, async (req, res) => {
    try {
        const newProduct = req.body;
        newProduct.user_id = req.session.user_id
        const product = await Product.create(newProduct)
        res.status(200).json(product);
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }

});

// update product
router.put('/:id', withAuth, async (req, res) => {
  // update product data ensuring that the user matches the product
    try{
    const product = await Product.update(req.body, {
    where: {
        id: req.params.id,
        user_id: req.session.user_id
    },
    })
    if (product){
        res.status(200).json(product);
    }else{
        res.status(404).end()
    }
} catch (err){
    console.log(err);
    res.status(400).json(err)
}
});

router.delete('/:id',withAuth, async (req, res) => {
  // delete one product by its `id` value ensureing the user matches the product
try{
    const product = await Product.destroy( {
    where: {
        id: req.params.id,
        user_id: req.session.user_id
    },
    })
    if (product){
        res.status(200).json(product);
    }else{
        res.status(404).end()
    }
} catch (err){
    console.log(err);
    res.status(400).json(err)
}
});

module.exports = router;
