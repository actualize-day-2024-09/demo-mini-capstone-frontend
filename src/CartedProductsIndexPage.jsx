import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

export function CartedProductsIndexPage() {
  const cartedProducts = useLoaderData();
  const navigate = useNavigate();

  const handleClick = () => {
    axios.post("/orders.json").then((response) => {
      console.log(response);
      navigate(`/orders/${response.data.id}`);
    });
  };

  return (
    <div>
      <h1>Shopping Cart ({cartedProducts.length} total)</h1>
      {cartedProducts.map((cartedProduct) => (
        <div key={cartedProduct.id}>
          <h2>{cartedProduct.product.name}</h2>
          <p>Quantity: {cartedProduct.quantity}</p>
        </div>
      ))}
      <button onClick={handleClick}>Buy now</button>
    </div>
  );
}
