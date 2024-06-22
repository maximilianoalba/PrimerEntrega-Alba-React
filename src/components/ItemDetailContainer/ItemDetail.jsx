import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Contex/CartContex";

const ItemDetail = ({ productos }) => {
  
  const [quantityAdded, setQuantityAdded] = useState(false);

  const { agregarItem } = useContext(CartContext);


const addProduct = (count) => {

    const productCart = { ...productos, quantity: count };

    agregarItem(productCart);

    setQuantityAdded(true)
  }


  return (
    <>
      <div className=" max-w-sm w-300 h-5/6 bg-white shadow rounded">
        <div className="h-48 w-full bg-cyan-200 flex flex-col justify-between p-4 bg-cover bg-center">
          <img
            src={productos.img}
            alt={productos.titulo}
            className=" font-mono h-48 w-full bg-gray-100 flex flex-col justify-between p-4 bg-cover bg-center"
          />
        </div>
        <div className=" font-mono p-5 flex flex-col items-center bg-green-100">
          <p className="text-gray-400 font-light text-xs text-center">
            ID:{productos.id}
          </p>
          <h1 className=" font-mono text-gray-800 text-center mt-4">
            {productos.titulo}
          </h1>
          <p className=" font-mono text-gray-400 mt-4 font-light text-xs text-center">
            {productos.descripcion}
          </p>
          <p className=" font-monotext-center text-gray-800 mt-4">
            $ {productos.precio}
          </p>
          <p className="text-gray-400 font-light mt-3 text-xs text-center">
            stock disponible: {productos.stock}
          </p>
          <div>
            {quantityAdded  ? (
              <Link to="/cart">
                <button className=" font-mono py-2 px-4 bg-cyan-300 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                  Ir al 🛒
                </button>
              </Link>
              
            ): (
              <ItemCount
                stock={productos.stock}
                addProduct={addProduct}
              />
            )}
              <Link to="/">
                <button className=" font-mono py-2 px-4 bg-cyan-300 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                  Seguir comprando
                </button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
