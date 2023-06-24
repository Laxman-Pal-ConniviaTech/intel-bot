const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const Subscription = require('../models/Subscription.model');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.get("/subscribe" , async function (req, res) {
    // res.send("Your Subscribed!");
    // const {data } = req.body;

    const startDate = new Date();
    const endDate =  new Date();

    endDate.setDate(startDate.getDate() + 20);

    console.log(endDate.toString());
    res.send(`Subscribed`);

//     const session = await stripe.checkout.sessions.create({ 
//         payment_method_types: ["card"], 
//         line_items: [ 
//           { 
//             price_data: { 
//               currency: "inr", 
//               product_data: { 
//                 name: product.name, 
//               }, 
//               unit_amount: product.price * 100, 
//             }, 
//             quantity: product.quantity, 
//           }, 
//         ], 
//         mode: "payment",
//       }); 

// const newSubscriber= new Subscription({
//     userId: req.session.userId,
//     productId: req.session.productId,
//     startDate: new Date(),
//     star
// })

})

module.exports = router;