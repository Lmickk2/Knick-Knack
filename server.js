const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');


const app = express();


// This is your test secret API key.
const stripe = require('stripe')('sk_test_51MRjHIE03WUhRZEoxcZgQO4EgSLwVxmZmaxb9A9vUpr02L9vrKYFyFbgMlMJayc3Yg4GIIBuGg3ZtYPt467W8ahL00v4BLd3EG');

app.use(express.static('public'));

const PORT = process.env.PORT || 3001;
const YOUR_DOMAIN = `http://localhost:${PORT}`;
const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success.html`,
      cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });
  
    res.redirect(303, session.url);
  });
app.use(routes);



app.listen(PORT, () => console.log('Now listening'));


