export function ProductsShow({ product, onUpdate, onDestroy }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(product, params, () => event.target.reset());
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
    </div>
  );
}
