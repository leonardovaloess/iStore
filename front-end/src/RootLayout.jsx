import { Outlet } from "react-router";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import ProductContext from "./context/ProductContext";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "./hook/useCart";

export default function RootLayout() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { cart, addItemToCart, removeProduct } = useCart();

  const filteredProduct = useMemo(() => {
    // Adiciona uma verificação para garantir que products é um array
    if (!Array.isArray(products)) {
      return [];
    }

    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, products]);

  const fetchProducts = async () => {
    try {
      console.log(`${import.meta.env.VITE_API_BASE_URL }/products`);
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL }/products`);
      // Verifica se a resposta é um array antes de definir o estado
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error("A resposta da API não é um array", response.data);
        setProducts([]);
      }
    } catch (error) {
      console.error("Erro ao tentar pegar dados", error);
      setProducts([]);
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
      <ProductContext.Provider value={{ products, fetchProducts, cart, addItemToCart, removeProduct }}>
        <main>
          <Outlet />
        </main>
      </ProductContext.Provider>
      <Footer />
    </>
  );
}