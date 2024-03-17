import { Outlet } from "react-router";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import ProductContext from "./context/ProductContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMemo } from "react";

export default function RootLayout() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

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
      <ProductContext.Provider value={{ products, fetchProducts }}>
        <main>
          <Outlet />
        </main>
      </ProductContext.Provider>
      <Footer />
    </>
  );
}
