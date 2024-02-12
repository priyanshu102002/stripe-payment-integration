import stripePackage from "stripe";

// We also need to send the customerInfo to the backend. We can use the following object for that: 
// const customerInfo = req.body;
// Non India user hona jururi hai
const customerInfo = {
    name: 'Jenny Rosen',
    address: {
        line1: '510 Townsend St',
        postal_code: '98140',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
    },
};

export const payment = async (req, res, next) => {
    const products = req.body;

    const stripe = stripePackage(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2020-08-27',
    });

    const customer = await stripe.customers.create(customerInfo);

    const line_items = products.map((product) => {
        return {
            price_data: {
                currency: "inr",
                product_data: {
                    name: product.dish
                },
                unit_amount: product.price * 100
            },
            quantity: product.quantity
        }
    })

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/cancel`,
        customer: customer.id
    });

    res.json({ id: session.id });
}