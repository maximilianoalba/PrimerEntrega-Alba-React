import React from "react";
import { Link } from "react-router-dom";

const ItemCardComponent = ({ titulo, descripcion, precio, img, id }) => {
  return (
    <>
      <div class="  font-mono w-80 shadow ">
        <div class="font-mono h-48 w-full bg-cyan-200 flex flex-col justify-between p-4 bg-cover bg-center">
          <img
            src={img}
            alt="Imagen del producto"
            className="font-mono h-48 w-full bg-gray-100 flex flex-col justify-between p-4 bg-cover bg-center"
          />
        </div>
        <div class="p-4 flex flex-col items-center bg-green-100">
          <h1 class=" font-mono text-gray-800 text-center mt-1">{titulo}</h1>
          <p class=" font-mono text-center text-gray-800 mt-1">${precio}</p>
          <Link to={`/item/${id}`}>
            <button class=" font-mono py-2 px-4 bg-cyan-300 text-white rounded hover:bg-blue-600 active:bg-blue-400 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
              Ver Detalle
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemCardComponent;
