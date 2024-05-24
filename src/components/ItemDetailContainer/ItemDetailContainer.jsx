import React from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../AsyncMock";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [productos, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const result = getProduct(Number(id));
    setProduct(result);
  }, [id]);

  return (
    <>
      <section className="flex justify-center items-center mt-[50px]  bg-cyan-50 ">
        <div class=" max-w-sm w-300 h-5/6 bg-white shadow rounded">
          <div class="h-48 w-full bg-cyan-200 flex flex-col justify-between p-4 bg-cover bg-center">
            <img
              src={productos.img}
              alt={productos.titulo}
              className=" font-mono h-48 w-full bg-gray-100 flex flex-col justify-between p-4 bg-cover bg-center"
            />
          </div>
          <div class=" font-mono p-5 flex flex-col items-center bg-green-100">
          <p class="text-gray-400 font-light text-xs text-center">ID:{id}</p>
            <h1 class=" font-mono text-gray-800 text-center mt-1">{productos.titulo}</h1>
            <p class=" font-mono text-gray-400 font-light text-xs text-center">
              {productos.descripcion}
            </p>
            <p class=" font-monotext-center text-gray-800 mt-1">$ {productos.precio}</p>

            <button class=" font-mono py-2 px-4 bg-cyan-300 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
              Agregar al carrito
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-2"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetailContainer;

