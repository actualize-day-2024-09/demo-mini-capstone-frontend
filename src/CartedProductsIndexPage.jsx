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
      <h1 className="text-3xl font-bold mb-3">Shopping Cart ({cartedProducts.length} total)</h1>
      {cartedProducts.map((cartedProduct) => (
        <div key={cartedProduct.id} className="mb-4">
          <h2 className="text-2xl font-bold mb-3">{cartedProduct.product.name}</h2>
          <p>Quantity: {cartedProduct.quantity}</p>
        </div>
      ))}
      <button onClick={handleClick} className="rounded border border-gray-300 p-2 mt-2 hover:bg-gray-100">
        Buy now
      </button>
    </div>
  );
}
