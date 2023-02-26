import React from "react";
import s from '../../src/styles/pasarelap.module.css';
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Pago Exitoso!!!");
          break;
        case "processing":
          setMessage("Su pago se esta procesando");
          break;
        case "requires_payment_method":
          setMessage("Su pago no fue exitoso, intentelo de nuevo");
          break;
        default:
          setMessage("Algo salio mal");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js aun no se ha cargado.
      // Debemos asegurarnos de desahilitar el formulario hasta que Stripe.js haya cargado.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Aca se debe colocar la pagina final de pago - no entendi bien esto, no se si con el deploy ya esta o hay que usar la url de stripe
        return_url: "https://star-link-sooty.vercel.app/", //como se haria para devolver a un componente 
      },
    });

    /* 
    Lo siguiente solo se ejecutara si hay un error inmediato al confirmar el pago, de lo contrario el cliente sera redirigido a la return_url, Lo ideal es que el cliente primero pase a un sitio intermedio para autorizar el pago y luego a la return_url
    */
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("Ocurrio un error inesperado.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className={s.spinner} id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* mostrar cualquier mensaje de error o exito */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
