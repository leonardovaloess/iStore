import { CardBody, CardSubtitle, Button } from "reactstrap";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  // const [toastIsOpen, setToastIsOpen] = useState(false);
  const { _id, name, imageUrl, price } = product;
  return (
    <div key={_id}>
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

        <Button color="dark" className="pb-2" block>
          Adicionar ao Carrinho
        </Button>
      </CardBody>
    </div>
  );
};
