import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import { IState } from "../../store";
import { ICartItem } from "../../store/modules/cart/types";
import { CNavbar } from "./style";

const Navbar = ({ onClick }: any) => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  const quantities = cart.map((item) => item.quantity);
  const totalQuantityOfAllProducts = quantities.reduce(function (
    total,
    numero
  ) {
    return total + numero;
  },
  0);

  return (
    <CNavbar>
      <section>
        <img src={logo} alt="logo" />
        <button onClick={onClick}>
          Cart
          {totalQuantityOfAllProducts > 0 && (
            <div>
              <span>{totalQuantityOfAllProducts}</span>
            </div>
          )}
        </button>
      </section>
    </CNavbar>
  );
};

export default Navbar;
