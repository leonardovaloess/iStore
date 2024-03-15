import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";

function MenuHamburguer(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button
        color="primary"
        onClick={toggle}
        style={{
          marginBottom: "0rem",
          background: "none",
          color: "black",
          padding: "0",
          fontSize: 40,
          border: "none",
        }}
      >
        <i className="bi bi-list"></i>
      </Button>
      <Collapse isOpen={isOpen} {...props}>
        <Card
          style={{
            width: "100%",
            border: "none",
            height: "auto",
            padding: "0px",
          }}
        >
          <CardBody
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5rem",
            }}
          >
            <Link
              to="/products"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.1rem",
              }}
            >
              <p>Produtos</p>
            </Link>
            <Link to="/carrinho">
              <p>
                <button
                  className="btn"
                  style={{ color: "black", fontSize: "1.1rem" }}
                >
                  <i className="bi bi-cart4"></i> Carrinho
                </button>
              </p>
            </Link>
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default MenuHamburguer;
