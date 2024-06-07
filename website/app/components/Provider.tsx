"use client";
import { ReactNode } from "react";
import { CartProvider as USCprovider } from "use-shopping-cart";
export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCprovider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://ecommerce-yd.vercel.app/stripe/success"
      cancelUrl="https://ecommerce-yd.vercel.app/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCprovider>
  );
}
