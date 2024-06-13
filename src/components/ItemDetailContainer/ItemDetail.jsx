
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
/* import { CartContext } from "../../context/CartContext"; */


const ItemDetail = ({productos}) => {    
const [quantityAdded, setQuantityAdded] = useState(0);
/* const  {addItem}= useContext(CartContext);  */

const handleOnadd = (quantity) => {
  setQuantityAdded(quantity);
};



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
            <p className="text-gray-400 font-light text-xs text-center">ID:{id}</p>
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
              {quantityAdded > 0 ? (
                 <Link to="/cart">
                <button className=" font-mono py-2 px-4 bg-cyan-300 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                  Ir al
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg> 
                </button>
                </Link>
                
              ) : (
                <ItemCount initial={1} stock={productos.stock} onAdd={handleOnadd} />
              )}
            </div> 
          </div>
        </div>
    </>
)
};

export default ItemDetail;