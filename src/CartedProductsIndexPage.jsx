import { useLoaderData } from "react-router-dom";

export function CartedProductsIndexPage() {
  const cartedProducts = useLoaderData();

  return (
    <div>
      <h1>Shopping Cart ({cartedProducts.length} total)</h1>
    </div>
  );
}
