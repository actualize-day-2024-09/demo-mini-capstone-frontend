import { useLoaderData, useNavigate } from "react-router-dom";

import { ProductsIndex } from "./ProductsIndex";

export function ProductsIndexPage() {
  const products = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (product) => {
    console.log("handleShow", product);
    navigate(`/products/${product.id}`);
  };

  return (
    <div>
      <ProductsIndex products={products} onShow={handleShow} />
    </div>
  );
}
