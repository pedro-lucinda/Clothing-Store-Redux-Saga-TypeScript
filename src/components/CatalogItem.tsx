import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC <CatalogItemProps>= ({ product  }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <article>
        <strong> {product.title} </strong> - <span> {product.price} </span>
        <button
          type="button"
          onClick={() => dispatch(addProductToCart(product))}
        >
          Comprar
        </button>
        <br />
        <br />
      </article>
    </div>
  );
};

export default CatalogItem;
