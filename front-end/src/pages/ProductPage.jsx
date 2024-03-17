import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.log("erro ao pegar dado do produto com id", error);
      }
    };

    getProduct();
  }, [id]); // Executa sempre que o id mudar

  

  return (
    <>
      <div className="container-1">
        <div className="container-2 mt-5">
          <h1>{product ? product.name : "Carregando..."}</h1>

          <div className="container-3">
            <img src={product.imageUrl} alt="" />
            <div>
              <p>{product.description}</p>
              <p>R$ {product.price}</p>
              <button className="btn btn-primary">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
