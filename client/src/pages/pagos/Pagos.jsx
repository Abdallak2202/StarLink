import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../../../components/stripe/CheckoutForm";

/* se debe llamar a loadStripe fuera del renderizado de un componente para evitar recrear el objeto Stripe en cada renderizado */
// aca va llave publica de stripe
const stripePromise = loadStripe(process.env.LLAVE_PUBLICA_STRIPE);

export default function App() {
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    // se crea el PaymentIntent tan pronto como se cargue la página
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "Cloud Server" }] }), //aca debe venir de la bd el producto o el localStorage
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
