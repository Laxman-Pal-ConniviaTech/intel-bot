const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const Subscription = require('../models/Subscription.model');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/subscribe" , async function (req, res) {
    // const {data } = req.body;

    const startDate = new Date();
    const endDate =  new Date();

    endDate.setDate(startDate.getDate() + 20);

    console.log(endDate.toString());
    res.send(`You Subscribed!`);

    const session = await stripe.checkout.sessions.create({ 
        payment_method_types: ["card"], 
        line_items: [ 
          { 
            price_data: { 
              currency: "inr", 
              product_data: { 
                name: "product", 
              }, 
              unit_amount: 400 * 100, 
            }, 
            quantity: 2, 
          }, 
        ], 
        mode: "payment",
      }); 


      if (!session){
        return response.send("Something went wrong. Please try again")
      }

const newSubscriber= new Subscription({
    userId: req.session.userId,
    productId: req.session.productId,
    startDate: startDate,
    endDate : endDate.getDate() + 30,
})

  await newSubscriber.save()

  res.send("You are Subscribed!")

})

module.exports = router;