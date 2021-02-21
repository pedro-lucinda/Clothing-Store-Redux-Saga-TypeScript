import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { IProduct } from "../../store/modules/cart/types";
import Cart from "../Cart";
import CatalogItem from "../CatalogItem";
import Navbar from "../Navbar";
import { CCatalog } from "./style";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => setCatalog(response.data))
      .catch((error) => console.log(error));
  }, []);

  function handleOpenCart() {
    setCart(!cart);
  }

  return (
    <>
      <Navbar onClick={handleOpenCart} />
      <CCatalog>
        <h1> Catalog </h1>
        <section>
          {catalog?.map((product) => (
            <CatalogItem product={product} key={product.id} />
          ))}
        </section>
        <aside style={{ display: cart ? "flex" : "none" }}>
          <Cart />
        </aside>
      </CCatalog>
    </>
  );
};

export default Catalog;
