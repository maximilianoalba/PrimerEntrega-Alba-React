import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ Children }) => {


  const initCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initCart);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  console.log(cart)
  
/*   const addItem = (producto) => {
    setCart(prevCart => {
        let productExists = false;
        const updatedCart = prevCart.map(item => {
            if (item.id === producto.id) {
                productExists = true;
                return { ...item, quantity: item.quantity + producto.quantity };
            }
            return item;
        });
        //Si el producto existe, sigue sumando productos, si no, lo agrega.
        if (!productExists) {
            updatedCart.push(producto);
        }
        return updatedCart;
    });
}; */
 const addItem = (newProducts) => {
    const condicion = estaEnElCarrito(newProducts.id)
    if(condicion){
      const productosModificados = cart.map((productsCart)=> {
        if(productsCart.id === newProducts.id){
          return { ...productsCart, quantity: productsCart.quantity + newProducts.quantity }
        }else{
          return productsCart
        }
      })
      setCart(productosModificados)
    }else{
      setCart([ ...cart, newProducts ])
    }
  } 

/* const addItem = (item, quantity) => {

    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  }; 
 */
  const totalQuantity = () => {
    const quantityTotalItem = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    return quantityTotalItem;
  };

  const totalPrice = () => {
    const totalCart = cart.reduce(
      (total, item) => total + (item.price * item.quantity),0
  );

    return totalCart;
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    const inCart = cart.some((prod) => prod.id === itemId);
    return inCart;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
      }}>
      {Children}
    </CartContext.Provider>
  );
};
