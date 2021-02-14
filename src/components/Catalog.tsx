import React, { useEffect, useState } from "react";
import api from "../services/api";
import { IProduct } from "../store/modules/cart/types";
import CatalogItem from "./CatalogItem";


const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => setCatalog(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(catalog)

  return (
    <div>
      <h1> Catalog </h1>

      {catalog?.map((product) => (
        <CatalogItem product={product}  key={product.id}/>
      ))}
    </div>
  );
};

export default Catalog;