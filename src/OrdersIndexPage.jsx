import { useLoaderData, Link } from "react-router-dom";

export function OrdersIndexPage() {
  const orders = useLoaderData();

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          <h2>Order #{order.id}</h2>
          <Link to={`/orders/${order.id}`}>View more</Link>
        </div>
      ))}
    </div>
  );
}
