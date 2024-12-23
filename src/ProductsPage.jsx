import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndex = () => {
    axios.get("/products.json").then((response) => {
      setProducts(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  };

  const handleShow = (product) => {
    console.log("handleShow", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleUpdate = (product, params, successCallback) => {
    axios.patch(`/products/${product.id}.json`, params).then((response) => {
      setProducts(products.map((p) => (p.id === product.id ? response.data : p)));
      setIsProductsShowVisible(false);
      successCallback();
    });
  };

  const handleDestroy = (product) => {
    console.log("handleDestroy", product);
    axios.delete(`/products/${product.id}.json`).then(() => {
      setProducts(products.filter((p) => p.id !== product.id));
      setIsProductsShowVisible(false);
    });
  };

  const handleAddToCart = (params) => {
    axios.post("/carted_products.json", params).then((response) => {
      console.log(response);
      setIsProductsShowVisible(false);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isProductsShowVisible} onClose={() => setIsProductsShowVisible(false)}>
        <ProductsShow
          product={currentProduct}
          onUpdate={handleUpdate}
          onDestroy={handleDestroy}
          onAddToCart={handleAddToCart}
        />
      </Modal>
    </main>
  );
}
