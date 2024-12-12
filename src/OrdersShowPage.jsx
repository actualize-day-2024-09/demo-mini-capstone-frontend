import { useLoaderData, Link } from "react-router-dom";

export function OrdersShowPage() {
  const order = useLoaderData();
  console.log(order);

  return (
    <div>
      <h2>Order #{order.id}</h2>
      {order.carted_products.map((carted_product) => (
        <div key={carted_product.id}>
          <h4>
            {carted_product.quantity} x {carted_product.product.name}
          </h4>
        </div>
      ))}
      <hr />
      <p>Subtotal: {order.subtotal}</p>
      <p>Tax: {order.tax}</p>
      <p>Total: {order.total}</p>
      <Link to="/orders">All orders</Link>
    </div>
  );
}
