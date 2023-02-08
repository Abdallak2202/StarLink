import React, { useState } from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";
import '../../src/styles/pasarelap.module.css';

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";

const stripePromise = loadStripe(
  process.env.LLAVE_PUBLICA_STRIPE
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      //console.log(paymentMethod);
      const { id } = paymentMethod;
      try {
        const { data } /*<-- aca podemos traer el objeto respónse, tener en cuenta esto por si necesitamos mas datos*/ = await axios.post('http://localhost:3001/checkout', {
          id,
          amount: 5*100 //se multipilca para llevarlo a centimos, no se por que? no lo entendi
        })
        console.log(data); //necesitamos ver este data que es enviada al backend, para esto debemos crear alla esa ruta
  
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }
  };

  console.log(!stripe || loading);

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <img
        src="https://www.ceupe.cl/images/easyblog_articles/384/b2ap3_thumbnail_R-12.jpg"
        alt="Imagen"
        className="img-fluid"
      />

      <h3 className="text-center my-2">Price: $5 </h3>

      <div className="form-group">
        <CardElement className="form-control" />
      </div>
      
      <button className="btn btn-success" disabled={!stripe}>
        {loading ? (
          <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        ) : (
          "Buy"
        )}
        </button>
    </form>
  );
};

export default function CardPagos() {
  return (
    <Elements stripe={stripePromise}>
      <div className="container p-4">
        <div className="row h-100">
          <div className="col-md-6 offset-md-4 h-100">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}

