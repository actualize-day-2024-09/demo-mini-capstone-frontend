import { useLoaderData, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router";

import { ProductsIndex } from "./ProductsIndex";

export function ProductsIndexPage() {
  let products = useLoaderData();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterName = searchParams.get("name");
  if (filterName) {
    products = products.filter((product) => product.name.toLowerCase().includes(filterName.toLowerCase()));
  }

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
