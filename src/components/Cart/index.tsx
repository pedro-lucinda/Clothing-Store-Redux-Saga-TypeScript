import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../../store";
import { ICartItem } from "../../store/modules/cart/types";
import CartItem from "./CartItem";
import { CCart } from "./style";

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  return (
    <CCart>
      {cart.map((item) => (
        <CartItem
          key={item.product.id}
          title={item.product.title}
          quantity={item.quantity}
          price={(item.quantity * item.product.price).toFixed(2)}
        />
      ))}
      {cart.length === 0 && <h3> Cart is empty </h3>}
    </CCart>
  );
};

export default Cart;
