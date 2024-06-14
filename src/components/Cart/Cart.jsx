import { useContext } from "react";
import { CartContext } from "../../Contex/CartContex";
import { Link } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);


  if (cart.length === 0) {
    return (
      <div className="">
        <h1>El carrito esta vacio</h1>
        <Link to="/">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-20">
      <h1>Carrito de compras</h1>
      {Cart.map((productscart) => (
        <div className="cart-item" key={productscart.id}>
          <img
            className="cart-img"
            src={productscart.img}
            alt={productscart.titulo}
          />
          <h3> {productscart.titulo} </h3>
          <h3> cantidad: {productscart.quantity} </h3>
          <h3> precio unitario: {productscart.precio} </h3>
          <h3>
            {" "}
            precio parcial: {productscart.precio * productscart.quantity}
          </h3>
          <FaDeleteLeft onClick={() => removeItem(productscart.id)} />
        </div>
      ))}
      <h2>Total : ${totalPrice()}</h2>
      <Link to="/checkout" className="button-link">
        Continuar comprando
      </Link>
      <div className="button-delete" onClick={clearCart}>
        Eliminar carrito
      </div>
    </div>
  );
};
export default Cart;
