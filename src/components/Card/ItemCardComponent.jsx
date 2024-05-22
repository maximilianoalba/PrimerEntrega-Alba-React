import React from "react";
import { Link } from "react-router-dom";

const ItemCardComponent = ({ titulo, precio, img, id }) => {
  return (
    <>
      <div className="p-10 flex content-between justify-center bg-green-100 max-h-screen">
        <div className="flex gap-10  max-w-md bg-white shadow-lg rounded-lg ">
          <div className="w-1/3 ">
            <img src={img} alt="Imagen del producto" />
          </div>
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">{titulo}</h1>
            <div className="flex items-center mt-2"></div>
            <div className="flex items-center justify-between mt-3">
              <h1 className="text-gray-700 font-bold text-xl">
                ${precio}
              </h1>
              <Link to={`/item/${id}`}>
                <button className="px-2 py-3 bg-cyan-200 text-black text-xs font-bold uppercase rounded">
                  Ver detalles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCardComponent;
