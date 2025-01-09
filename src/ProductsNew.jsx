import axios from "axios";
import { useState, useEffect } from "react";

export function ProductsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  const [suppliers, setSuppliers] = useState([]);

  const handleSuppliersIndex = () => {
    axios.get("/suppliers.json").then((response) => {
      console.log(response);
      setSuppliers(response.data);
    });
  };

  useEffect(handleSuppliersIndex, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          Name: <input name="name" type="text" className="mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <div className="mb-2">
          Price: <input name="price" type="text" className="mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <div className="mb-2">
          Description: <input name="description" type="text" className="mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <div className="mb-2">
          Image url: <input name="image_url" type="text" className="mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <div className="mb-2">
          Supplier:
          <select name="supplier_id" className="mt-1 block w-full rounded-md border-gray-300" defaultValue="">
            <option value="" disabled>
              Select a supplier
            </option>
            {suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="rounded border border-gray-300 p-2 mt-2 hover:bg-gray-100">
          Create
        </button>
      </form>
    </div>
  );
}
