import { Outlet } from "react-router";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import ProductContext from "./context/ProductContext";
import axios from "axios";
import {  useEffect, useMemo, useState } from "react";
import { useCart } from "./hook/useCart";

export default function RootLayout() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { cart, addItemToCart, removeProduct } = useCart()
  

  const filteredProduct = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    } catch (error) {
      console.log("Erro ao tentar pegar dados", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header
        search={search}
        setSearch={(ev) => setSearch(ev.target.value)}
        filteredProduct={filteredProduct}
      />
      <ProductContext.Provider value={{ products, fetchProducts, cart, addItemToCart, removeProduct}}>
        <main>
          <Outlet />
        </main>
      </ProductContext.Provider>
      <Footer />
    </>
  );
}
