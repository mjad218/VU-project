"use client";
import { TextureBackground } from "../texture-wrapper";
import React, { FormEvent, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { CustomButton } from "../custom-button";
import { API_URL } from "@/constants";
import { useCart } from "../cart/context";
import { useCurrentUser } from "../current-user";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { address } = useCart();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { accessToken } = useCurrentUser();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError?.message ?? "");
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      body: JSON.stringify({
        addressId: address?.id ?? 1,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const { clientSecret, order } = await res.json();

    if (!stripe) return;
    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://127.0.0.1:3000/",
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error?.message ?? "");
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <PaymentElement />
      <CustomButton type="submit" disabled={!stripe || !elements}>
        Pay
      </CustomButton>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};
export const Pay = () => {
  return (
    <TextureBackground className="p-10 rounded-xl gap-4 w-[450px] max-w-full">
      <h3 className="font-title text-2xl m-0 p-0 pb-5">Pay Now </h3>
      {/* @ts-ignore */}
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </TextureBackground>
  );
};
