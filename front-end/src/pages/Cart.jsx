import { useContext } from "react";
import { CartProductCard } from "../Components/CartProductCard";

import ProductContext from "../context/ProductContext";

const Cart = () => {
  const { cart } = useContext(ProductContext);
  console.log(cart);

  const finalPrice = cart
    .reduce((total, product) => total + product.price, 0)
    .toFixed(2);


  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        {!cart.length ? <h1>Nenhum produto adicionado ao carrinho!</h1> : null}

        {cart.map((product) => (
          <CartProductCard key={Math.random()} product={product} />
        ))}

        {cart.length ? (
          <>
            <p className="h1 mt-5">
            TOTAL A PAGAR:{" "}
            <span style={{ fontWeight: "400", fontSize: "2rem" }}>
              R$ {finalPrice}
            </span>
          </p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => alert("este é um programa para teste")}
          >
            Finalizar Compra
          </button>
        </>
        ): null}
      </div>

      
    </div>
  );
};

export default Cart;
