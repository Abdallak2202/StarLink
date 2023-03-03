import React, { useContext } from "react";

import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import InjectedCheckoutForm from "../../components/checkout/CheckoutForm";
import Cart from "./cart";
// import AppContext from "../context/AppContext";

function Checkout({ carrito, eliminarProducto }) {
  // get app context
  //   const appContext = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  //   const { isAuthenticated } = appContext;

  // load stripe to inject into elements components

  const stripePromise = loadStripe(
    "pk_test_51MesrTBLqsKX5runoMdAt5d1sl0UXc2aqHJrSZYGvuUTxn8VXgM7IfFnOHOGugg4ZSmUeMJJGypKICq8cBvSfSGb00893WkqJl"
  );

  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20 }}>Checkout</h1>
        <Cart carrito={carrito} eliminarProducto={eliminarProducto} />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <InjectedCheckoutForm />
        </Elements>
      </Col>
    </Row>
  );
  // }
}
export default Checkout;
