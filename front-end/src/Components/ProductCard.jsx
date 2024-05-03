import PropTypes from "prop-types";
import { CardBody, CardSubtitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import ToastResult from "./ToastResult";

export const ProductCard = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { _id, name, imageUrl, price } = product;
  const { addItemToCart, cart } = useContext(ProductContext);

  console.log(cart);
  return (
    <>
      <div>
        <Link to={`/products/${_id}`}>
          <img
            className="card-img-top mb-3"
            src={imageUrl}
            alt="Product"
            height={200}
            width={600}
          />
        </Link>

        <CardBody>
          <Link
            to={`/products/${_id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h5 className="card-title" style={{ cursor: "pointer" }}>
              {name}
            </h5>
          </Link>

          <CardSubtitle className="mb-3 text-muted" tag="h6">
            R$ {price}
          </CardSubtitle>

          <Button
            color="dark"
            className="pb-2"
            block
            onClick={() => {
              addItemToCart(product);
              setToastIsOpen(true);
              setTimeout(() => setToastIsOpen(false), 1000 * 3);
            }}
          >
            Adicionar ao Carrinho
          </Button>
        </CardBody>
      </div>
      <ToastResult
        toastIsOpen={toastIsOpen}
        bg={"bg-success"}
        innerText={"Adicionado ao carrinho"}
        setToastIsOpen={setToastIsOpen}
      />
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};