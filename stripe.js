const Stripe = require('stripe');
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

var charge = await stripe.charges.retrieve(
    'ch_3MQfCh2eZvKYlo2C0y0ktIuF',
    {
      apiKey: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'
    }
  );