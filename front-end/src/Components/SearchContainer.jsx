import { Link } from "react-router-dom";

const SearchContainer = ({filteredProduct}) => {
  return (
    <div className="search-container">
      {filteredProduct.map((product) => (
        <div key={product._id}>
          <Link
            to={`products/${product._id}`}
            style={{
              textDecoration: "none",
            }}
          >
            <p>{product.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchContainer