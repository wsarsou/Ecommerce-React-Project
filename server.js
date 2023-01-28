// sk_test_51MVHklHMflWDbA3QhSg7bUDxBzlc7eDMy7pzJkQ1RS3r3h32iP4bcgE2olOgIvpo4V79yyVfkhXgWZJMWfEAedIq001321jdQM

// Coffee: price_1MVI3aHMflWDbA3QjoL2W2OJ

// Sunglasses: price_1MVI4WHMflWDbA3QTM0PbC7X

//Camera: price_1MVI4vHMflWDbA3Q0WAcEqnA

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51MVHklHMflWDbA3QhSg7bUDxBzlc7eDMy7pzJkQ1RS3r3h32iP4bcgE2olOgIvpo4V79yyVfkhXgWZJMWfEAedIq001321jdQM'
);

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/checkout', async (req, res) => {
  /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach(item => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log('Listening on port 4000!'));
