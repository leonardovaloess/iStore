import { ProductCard } from "./ProductCard";

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
