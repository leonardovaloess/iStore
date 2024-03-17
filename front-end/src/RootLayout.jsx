import { Outlet } from "react-router";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import ProductContext from "./context/ProductContext";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  
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
      <Header />
      <ProductContext.Provider value={{products, fetchProducts, cart, setCart}}>
        <main>
          <Outlet />
        </main>
      </ProductContext.Provider>
      <Footer />
    </>
  );
}
