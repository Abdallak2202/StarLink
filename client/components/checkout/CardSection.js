import React from "react";

import { CardElement } from "@stripe/react-stripe-js";

function CardSection(props) {
  return (
    
    <div >
      <div>
        <label htmlFor="card-element">Credit or debit card</label>

        <div>
          <fieldset style={{ border: "none" }}>
            <div className="form-row">
              <div id="card-element" style={{ width: "100%" }}>
                <CardElement
                  options={{
                    style: { width: "100%", base: { fontSize: "18px" } },
                  }}
                />
              </div>
              <br />
              <div className="order-button-wrapper">
                <button onClick={props.submitOrder} className=' className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-20 py-3 text-base font-medium text-white shadow-lg hover:bg-indigo-800"'>Confirm order</button>
              </div>
              {props.stripeError ? (
                <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-4" role="alert">
                <p class="font-bold">Alerta</p>
                <p>{props.stripeError}</p>
              </div>
                // <div>{props.stripeError.toString()}</div>
              ) : null}
              <div id="card-errors" role="alert" />
            </div>
          </fieldset>
        </div>
      </div>
      <style jsx>
        {`
          .order-button-wrapper {
            display: flex;
            width: 100%;
            align-items: flex-end;
            justify-content: flex-end;
          }
        `}
      </style>
    </div>
  );
}
export default CardSection;