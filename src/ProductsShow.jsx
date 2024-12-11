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
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" defaultValue={product.name} type="text" />
        </div>
        <div>
          Price: <input name="price" defaultValue={product.price} type="text" />
        </div>
        <div>
          Description: <input name="description" defaultValue={product.description} type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDestroy(product)}>Destroy</button>

      <form onSubmit={handleShoppingCartSubmit}>
        <div>
          Quantity: <input name="quantity" type="number" />
        </div>
        <input name="product_id" type="hidden" value={product.id} />
        <button type="submit">Add to cart</button>
      </form>
    </div>
  );
}
