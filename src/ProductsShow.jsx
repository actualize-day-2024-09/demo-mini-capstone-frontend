export function ProductsShow({ product, onUpdate, onDestroy, onAddToCart }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(product, params, () => event.target.reset());
  };

  const handleShoppingCartSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onAddToCart(params);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <img src={product.primary_image_url} className="w-full rounded" />
          <form onSubmit={handleShoppingCartSubmit} className="mt-4 p-2 rounded bg-slate-200">
            <div>
              <label className="font-bold">Quantity:</label>
              <input name="quantity" type="number" className="mt-1 block w-full rounded-md border-gray-300" />
            </div>
            <input name="product_id" type="hidden" value={product.id} />
            <button type="submit" className="rounded border border-gray-300 p-2 mt-2 hover:bg-gray-100">
              Add to cart
            </button>
          </form>
        </div>
        <div className="col-span-2 ...">
          <p>
            <span className="text-2xl">Price:</span> {product.price}
          </p>
          <p>
            <span className="text-2xl">Description:</span> {product.description}
          </p>
          {localStorage.admin === "true" ? (
            <>
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="mb-4">
                  <label className="font-bold">Name:</label>
                  <input
                    name="name"
                    defaultValue={product.name}
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300"
                  />
                </div>
                <div className="mb-4">
                  <label className="font-bold">Price:</label>
                  <input
                    name="price"
                    defaultValue={product.price}
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300"
                  />
                </div>
                <div className="mb-4">
                  <label className="font-bold">Description:</label>
                  <input
                    name="description"
                    defaultValue={product.description}
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300"
                  />
                </div>
                <button type="submit" className="rounded border border-gray-300 p-2 mt-2 hover:bg-gray-100">
                  Update
                </button>
                <button
                  onClick={() => onDestroy(product)}
                  type="button"
                  className="rounded border border-gray-300 p-2 mt-2 ml-2 hover:bg-gray-100"
                >
                  Destroy
                </button>
              </form>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
