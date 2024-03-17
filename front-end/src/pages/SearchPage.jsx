import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";
import ProductsList from "../Components/ProductsList";

const SearchPage = () => {
  const { products } = useContext(ProductContext);
  const { search } = useParams();

  const searchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );

  console.log(searchProducts);
  return (
    <div style={{ minHeight: "100vh" }} className="container-1">
      <div className="img-container mb-5">
        <img
          src="https://consomac.fr/images/news/apple-stores-vm-oct20.jpg"
          alt=""
          className="background-img"
        />
        <h1 className="display-1">Produtos</h1>
      </div>

      <div className="container-2">
        <h1>Exibindo resultados para: {search}</h1>

        {searchProducts.length ? (
          <ProductsList products={searchProducts} />
        ) : (
          <p className="mt-5">Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
