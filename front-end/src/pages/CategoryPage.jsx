import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";
import ProductsList from "../Components/ProductsList";

export const CategoryPage = () => {
  const { products } = useContext(ProductContext);
  const { category } = useParams();

  const categoryProducts = products.filter((product) =>
    product.name.toLowerCase().includes(category)
  );

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
          <h1>Confira:</h1>

          <ProductsList products={categoryProducts} />
        </div>
      </div>
    </>
  );
};
