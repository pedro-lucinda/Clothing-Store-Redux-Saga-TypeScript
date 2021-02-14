/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store";
import { addProductToCartRequest } from "../../store/modules/cart/actions";
import { IProduct } from "../../store/modules/cart/types";
import { CItem } from "./style";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>((state) =>
    state.cart.failedStockCheck.includes(product.id)
  );

  return (
    <CItem>
      <img
        src="https://source.unsplash.com/1600x900/?men,tshirt"
        alt="Product Image"
      />
      <strong> {product.title} </strong> - <span> {product.price} </span>
      <button
        type="button"
        onClick={() => dispatch(addProductToCartRequest(product))}
      >
        Comprar
      </button>
      <br />
      <br />
      {hasFailedStockCheck && (
        <span style={{ color: "red" }}> Produto Esgotado </span>
      )}
    </CItem>
  );
};

export default CatalogItem;
