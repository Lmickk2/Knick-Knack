const router = require('express').Router();
const { Category, Product, User } = require('../models');

router.get('/', async (req, res) =>
{
    try {
        const dbCategoryList = await Category.findAll({
            include: [
                {
                    model: Product,
                    attributes: ['product_name', 'description','stock','price',],
                },{
                    model: User,
                    attributes: ['name']
                }
            ],
        });

        const categories = dbCategoryList.map((category) =>
            category.get({ plain: true })
        );
        res.render('homepage', {
            categories,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
// 
