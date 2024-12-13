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

  const handleAddToCart = (params) => {
    axios
      .post("/carted_products.json", params)
      .then((response) => {
        console.log(response);
        navigate("/carted_products");
      })
      .catch((error) => {
        console.log(error);
        if (error.status === 401) {
          navigate("/login");
        }
      });
  };

  return (
    <div>
      <ProductsShow product={product} onUpdate={handleUpdate} onDestroy={handleDestroy} onAddToCart={handleAddToCart} />
    </div>
  );
}
