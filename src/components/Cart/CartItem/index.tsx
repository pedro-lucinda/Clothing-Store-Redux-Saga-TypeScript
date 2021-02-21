import React from "react";
import { CCartItem } from "./style";

interface PropsCartItem {
  title: string;
  price: string;
  quantity: number;
}

const CartItem = ({ title, price, quantity }: PropsCartItem) => {
  return (
    <CCartItem>
      <h3> {title} </h3>
      <main>
        <p> x {quantity} </p>
        <h3> {price} </h3>
      </main>
    </CCartItem>
  );
};

export default CartItem;
