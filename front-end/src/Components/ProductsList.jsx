import PropTypes from "prop-types";
import { ProductCard } from "./ProductCard";

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      // Aqui você pode adicionar outras propriedades esperadas de um produto
    })
  ).isRequired,
};

export default function ProductsList({ products }) {
  return (
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
  );
}

