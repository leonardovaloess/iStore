import { Link } from "react-router-dom";
import appleLogo from "../assets/imgs/Apple_logo_black.svg.svg";
import MenuHamburguer from "./MenuHamburguer";
import { useEffect, useState } from "react";
import SearchContainer from "./SearchContainer";

const Header = ({ search, setSearch, filteredProduct }) => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isInputEmpty = () => {
    return search.trim() === "";
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setVisible(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setVisible(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleSearchSubmit = () => {
    if (!isInputEmpty()) {
      // Apenas navegue para a página de pesquisa se o campo de pesquisa não estiver vazio
      window.location.href = `/search/${search}`;
    }
  };

  return (
    <>
      <header className="header-container pt-4">
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            width: "230px",
          }}
        >
          <img src={appleLogo} alt="logo-apple" width={40} />
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h1 className="mt-2">iLovers</h1>
          </Link>
        </div>

        {visible ? <MenuHamburguer /> : null}

        <div className="search-input">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={search}
            onChange={setSearch}
            onFocus={() => setIsOpen(true)}
            onBlur={() => {
              setTimeout(() => {
                setIsOpen(false);
              }, 200);
            }}
          />
         
          <button
            className="btn btn-dark"
            onClick={handleSearchSubmit}
            disabled={isInputEmpty()}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className="links-container">
          <Link to="/products" style={{ textDecoration: "none" }}>
            <p>Produtos</p>
          </Link>
          <Link to="/carrinho">
            <p>
              <button className="btn btn-primary">
                <i className="bi bi-cart4"></i> Carrinho
              </button>
            </p>
          </Link>
        </div>
      </header>

      {isOpen ? <SearchContainer filteredProduct={filteredProduct} /> : null}
    </>
  );
};

export default Header;
