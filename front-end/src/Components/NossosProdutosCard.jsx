import { Link } from "react-router-dom";

const NossosProdutosCard = ({ img, link, name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <h4>{name}</h4>
      <img
        src={img}
        height={200}
        style={{
          objectFit: "cover",
        }}
      />
      <Link
        to={link}
        className="link-secondary link-opacity-10-hover"
        style={{ textDecoration: "none", color: "fff" }}
      >
        Confira
      </Link>
    </div>
  );
};

export default NossosProdutosCard;
