
/* /components/Checkout/CheckoutForm.js */

import React, { useState, useContext, useEffect } from "react";

import { FormGroup, Label, Input } from "reactstrap";

import fetch from "isomorphic-fetch";
import Cookies from "js-cookie";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import CardSection from "./CardSection";
import { getTokenFromLocalCookie } from "lib/auth";
import { useRouter } from "next/router";
// import AppContext from "../../context/AppContext";


function CheckoutForm() {
  const router =useRouter()
    const [total, setTotal] = useState(0);
    const carritoLS = JSON.parse(localStorage.getItem("carrito"));
  const [data, setData] = useState({
    address: "",
    city: "",
    state: "",
    stripe_id: "",
  });
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
//   const appContext = useContext(AppContext);
useEffect(()=> {
    const calculoTotal = carritoLS?.reduce(( total, producto) => total + producto.price, 0);
    
    setTotal(calculoTotal);
      }, []);
  function onChange(e) {
    // set the key = to the name property equal to the value typed
    const updateItem = (data[e.target.name] = e.target.value);
    // update the state data object
    setData({ ...data, updateItem });
  }

  async function submitOrder() {
    // event.preventDefault();
    
   try {
    const cardElement = elements.getElement(CardElement);

    // // Pass the Element directly to other Stripe.js methods:
    // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
    // get token back from stripe to process credit card
    const token = await stripe.createToken(cardElement);
    console.log({carritoLS});
    const userToken = getTokenFromLocalCookie();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
      //  const  response = await fetch(`http://localhost:1337/orders`, {
      method: "POST",
      headers: userToken && { Authorization: `Bearer ${userToken}` },
      body: JSON.stringify({
        amount:total,
        products: (carritoLS)? carritoLS:[],
        address: data.address,
        city: data.city,
        state: data.state,
        token: token.token.id,
      }),
    });
if(response.ok){
  window.open("/recibo-pago/recibo", '_blank');
  localStorage.setItem("carrito", JSON.stringify([]))
  router.push('/')
  window.location.reload()
} 
    if (!response.ok) {
      setError('Su pago fue Rechazado');
      console.log({error});
    }
   } catch (er) {
    console.log({er})
   }
    
   
  
    // // Use elements.getElement to get a reference to the mounted Element.
   

    // OTHER stripe methods you can use depending on app
    // // or createPaymentMethod - https://stripe.com/docs/js/payment_intents/create_payment_method
    // stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    // });

    // // or confirmCardPayment - https://stripe.com/docs/js/payment_intents/confirm_card_payment
    // stripe.confirmCardPayment(paymentIntentClientSecret, {
    //   payment_method: {
    //     card: cardElement,
    //   },
    // });
  }

  return (
    <div className="paper">
      <h5>Your information:</h5>
      <hr />
      <FormGroup style={{ display: "flex" }}>
        <div style={{ flex: "0.90", marginRight: 10 }}>
          <Label className='labelPaid'>Address</Label>
          <Input name="address" onChange={onChange} />
        </div>
      </FormGroup>
      <FormGroup style={{ display: "flex" }}>
        <div style={{ flex: "0.65", marginRight: "6%" }}>
          <Label className='labelPaid'>City</Label>
          <Input name="city" onChange={onChange} />
        </div>
        <div style={{ flex: "0.25", marginRight: 0 }}>
          <Label className='labelPaid'>State</Label>
          <Input name="state" onChange={onChange} />
        </div>
      </FormGroup>

      <CardSection data={data} stripeError={error} submitOrder={submitOrder} />
    </div>
  );
}
export default CheckoutForm;
