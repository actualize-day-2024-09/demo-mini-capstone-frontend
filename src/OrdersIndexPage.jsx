import { useLoaderData, Link } from "react-router-dom";

export function OrdersIndexPage() {
  const orders = useLoaderData();

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          <h2 className="text-2xl font-bold mb-3 mt-6">Order #{order.id}</h2>
          <Link to={`/orders/${order.id}`} className="rounded border border-gray-300 p-2 mt-2 hover:bg-gray-100">
            View more
          </Link>
        </div>
      ))}
    </div>
  );
}
