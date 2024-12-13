import { useLoaderData, Link } from "react-router-dom";

export function OrdersShowPage() {
  const order = useLoaderData();
  console.log(order);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Order #{order.id}</h2>
      {order.carted_products.map((carted_product) => (
        <div key={carted_product.id}>
          <h4 className="font-bold mb-2">
            {carted_product.quantity} x {carted_product.product.name}
          </h4>
        </div>
      ))}
      <div className="bg-slate-300 rounded p-4 mb-10 mt-4">
        <p>Subtotal: {order.subtotal}</p>
        <p>Tax: {order.tax}</p>
        <p>Total: {order.total}</p>
      </div>
      <Link to="/orders" className="rounded border border-gray-300 p-2 hover:bg-gray-100">
        All orders
      </Link>
    </div>
  );
}
