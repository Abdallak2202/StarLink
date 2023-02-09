const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();

const stripe = new Stripe(process.env.LLAVE_PRIVADA_STRIPE); /*Esta clave deberia estar en un .env*/

app.use(cors({ origin: "http://localhost:3000" }));// esto lo usamos para que pueda resivir informacion desde distintos puertos, en este caso el 3000
app.use(express.json()); //esto para que el backend pueda entender todos los objetos json que llegan van llegando

app.post("/checkout", async (req, res) => {
  //console.log(req.body);
  try {
    const { id, amount } = req.body;

    const payment =  await stripe.paymentIntents.create({
      amount,
      currency: "USD",//ver si el precio sera en dolares o moneda argentina
      description: "informacion debe venir de la base de datos",
      payment_method: id, //viene del front
      confirm: true,
    });

    console.log(payment);

    res.status(200).json({message: "Succesfull payment"});
  } catch (error) {
    console.log(error);
    res.json({ message: error.raw.message });
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
