"use client";
import { ReactNode } from "react";
import { CartProvider as USCprovider } from "use-shopping-cart";
export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCprovider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://localhost:3000/stripe/success"
      cancelUrl="http://localhost:3000/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCprovider>
  );
}
