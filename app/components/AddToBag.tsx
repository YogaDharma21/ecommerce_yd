"use client";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
}
export default function AddToBag({
  name,
  image,
  price,
  currency,
  description,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    _id: "lsjkfn",
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add to cart
    </Button>
  );
}
