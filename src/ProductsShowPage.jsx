import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

import { ProductsShow } from "./ProductsShow";

export function ProductsShowPage() {
  const product = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (product, params) => {
    console.log("handleUpdate", params);
    axios.patch(`/products/${product.id}.json`, params).then(() => {
      navigate("/products");
    });
  };

  const handleDestroy = (product) => {
    console.log("handleDestroy", product.id);
    axios.delete(`/products/${product.id}.json`).then(() => {
      navigate("/products");
    });
  };

  return (
    <div>
      <ProductsShow product={product} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  );
}
