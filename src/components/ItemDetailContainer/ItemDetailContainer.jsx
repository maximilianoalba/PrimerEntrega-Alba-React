import React from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../AsyncMock';
import { useState, useEffect } from 'react';


const ItemDetailContainer = () => {

const [productos, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const result = getProduct(Number(id));
    setProduct(result);
  }, [id]);


return (
    <>
    <section className="flex justify-center items-center mt-[50px]" >
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={productos.img} alt="Sunset in the mountains"/>
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{productos.titulo}</div>
        <p className="text-gray-700 text-base">
    {productos.descripcion}
    </p>
    </div>
        <div className="px-6 pt-4 pb-2">
        
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ID:{id}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Precio:{productos.precio}</span>
            <button className="inline-block bg-gray-400 hover:bg-red-100 rounded-full px-4 py-3 text-sm font-bold text-gray-700 mr-2 mb-2">Agregar</button>
        </div>
    </div>
    </section>

    </>
    )
}

export default ItemDetailContainer