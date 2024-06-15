import { useContext } from "react";
import { CartContext } from "../../Contex/CartContex";
import { Link } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col bg-green-300 ">
        <h1>El carrito esta vacio</h1>
        <Link to="/">Ver productos</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-green-300 p-20">
      <h1 className="">Carrito de compras</h1>
      {cart.map((productscart) => (
        <div className=" w-96 flex-row mx-20" key={productscart.id}>
          <img
            className=""
            src={productscart.img}
            alt={productscart.titulo}
          />
          <h2 className=" gap-10"> {productscart.titulo} </h2>
          <h2 className=""> cantidad: {productscart.quantity} </h2>
          <h2 className=""> precio unitario: {productscart.precio} </h2>
          <h2 className="">
            precio parcial: {productscart.precio * productscart.quantity}
          </h2>
          <FaDeleteLeft onClick={() => removeItem(productscart.id)} className=" size-20 text-red-950" />
        </div>
      ))}
      <h2>Total : $ {totalPrice()} </h2>
      <Link to="/checkout" className="">
        <button>VAMOS A LA ORDEN</button>
      </Link>
      <button>
        <div className=" bg-slate-600" onClick={clearCart}>
        <button>Eliminar carrito</button>
        </div>
      </button>
    </div>
  );
};
export default Cart;
