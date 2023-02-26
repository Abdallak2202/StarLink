const stripe = require('stripe') (process.env.LLAVE_PRIVADA_STRIPE);

const calculateOrderAmount = (items) => {
  /* 
  Se debe reemplazar esta constante con el calculo del monto del pedido, es bueno calcular el total en el servidor para evitar que las personas manipulen directamente el monto en el client
  */
  return 1400;
};

export default async function handler(req, res) {
  const { items } = req.body;

  // Se crea PaymentIntent con el monto del pedido y la moneda
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "USD",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
