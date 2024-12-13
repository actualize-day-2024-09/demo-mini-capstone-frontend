export function ProductsIndex({ products, onShow }) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">All products ({products.length} total)</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="rounded shadow-lg mb-4">
            <img src={product.primary_image_url} className="rounded-t w-full aspect-[4/3] object-cover" />
            <div className="p-3">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p>Price: {product.price}</p>
              <button
                className="mt-4 rounded border border-gray-300 p-2 hover:bg-gray-100"
                onClick={() => onShow(product)}
              >
                More info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
