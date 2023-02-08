const express = require("express");
const Stripe = require("stripe");
const stripe = new Stripe(process.env.LLAVE_PRIVADA_STRIPE); /*Esta clave deberia estar en un .env*/

const cors = require("cors");

const app = express();


app.use(cors({ origin: "*" }));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  //console.log(req.body);
  const { id, amount } = req.body;

  try {
    const payment =  await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "informacion debe venir de la base de datos",
      payment_method: id, //viene del front
      confirm: true,
    });

    console.log(payment);
    return res.status(200).json({message: "Succesfull payment"});
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});

app.listen(3001, () => {
  console.log("Server on port ", 3001);
});

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
