import { useState, useEffect } from "react";



export const useCart = () => {
  // Array de produtos do carrinho
  const [cart, setCart] = useState([]);

  // Salvar carrinho no localStorage sempre que o carrinho for atualizado

  useEffect(() => {
    const storedCart = localStorage.getItem("shopping-cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);


  const addItemToCart = (product) => {
    const updatedCart = [...cart, product];
    localStorage.setItem("shopping-cart" , JSON.stringify(updatedCart));
    setCart(updatedCart)
  };

  const removeProduct = (productId) => {
    const productIndex = cart.findIndex((product) => product._id === productId);

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(productIndex, 1); // corrigindo aqui
      localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };

  return {
    cart, addItemToCart, removeProduct
  }
    
};


