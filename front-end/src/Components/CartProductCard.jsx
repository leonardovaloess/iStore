import { useContext } from "react";
import ProductContext from "../context/ProductContext";

export const CartProductCard = ({ product }) => {
  const { removeProduct } = useContext(ProductContext);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          gap: "1rem",
          marginTop: "2rem",
          borderTop: "1px solid rgba(0, 0, 0, 0.137)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.137)",
          width: "50%",
          position: "relative",
        }}
        className="product-cart-container"
        key={product._id}
      >
        <img src={product.imageUrl} style={{ width: 100 }} />
        <h1 style={{ fontSize: "2rem" }}>{product.name}</h1>
        <h2 style={{ fontSize: "1.4rem" }}>R$ {product.price}</h2>
        <button
          style={{ position: "absolute", right: 15 }}
          className="btn btn-danger "
          onClick={() => {
            removeProduct(product._id);
          }}
        >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </>
  );
};
