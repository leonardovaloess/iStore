import { useContext } from "react";
import "../index.css";
import ProductContext from "../context/ProductContext";
import { ProductCard } from "../Components/ProductCard";


const Products = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div style={{ minHeight: "100vh" }} className="container-1">
        <div className="img-container mb-5">
          <img
            src="https://consomac.fr/images/news/apple-stores-vm-oct20.jpg"
            alt=""
            className="background-img"
          />
          <h1 className="display-1">Nossos produtos</h1>
        </div>

        <div className="container-2 mt-5">
          <h1>Confira Nossos produtos</h1>

          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6rem",
              flexWrap: "wrap",
            }}
            className="mt-5 mb-5"
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Products;
