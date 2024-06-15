import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const agregarItem = (newProducts) => {
    const condicion = isInCart(newProducts.id);
    if (condicion) {
      const productosModificados = cart.map((productsCart) => {
        if (productsCart.id === newProducts.id) {
          return {
            ...productsCart,
            quantity: productsCart.quantity + newProducts.quantity,
          };
        } else {
          return productsCart;
        }
      });
      setCart(productosModificados);
    } else {
      setCart([...cart, newProducts]);
    }
  };

  const totalQuantity = () => {
    const quantityTotalItem = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    return quantityTotalItem;
  };

  const totalPrice = () => {
    const totalCart = cart.reduce( (total, productsCart) => total + ( productsCart.precio * productsCart.quantity ), 0)
    return totalCart
  }


  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(
      (productsCart) => productsCart.id !== itemId
    );
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    const inCart = cart.some((productsCart) => productsCart.id === itemId);
    return inCart;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};
