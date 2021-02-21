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
      <img src={product.url} alt="Product Image" />
      <h3> {product.title} </h3> - <p> {product.price} </p>
      <button
        type="button"
        onClick={() => dispatch(addProductToCartRequest(product))}
      >
        Add to Cart
      </button>
      <br />
      <br />
      {hasFailedStockCheck && <span> Produto Esgotado </span>}
    </CItem>
  );
};

export default CatalogItem;
