import React, { useEffect, useState } from "react";
import { getCategory } from "../../AsyncMock";
import ItemCardComponent from "../Card/ItemCardComponent";
import { useParams } from "react-router-dom";

const ItemCategory = () => {
  const { category } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getCategory(category).then((result) => {
      setProductos(result);
    });
  }, [category]);

  return (
    <>
    <main className="   bg-cyan-100 flex-wrap content-between">
      <div className=" bg-green-200 gap-5 my-4">
        <h2 className=" text-center font-mono text-slate-600">
          Bienvenidos a InfinitiByte PC
        </h2>
      </div>
      <section className=" grid grid-cols-1 sm:grid-cols-3 justify-center gap-2 font-mono text-xl">
        <>
          {productos.map((productos) => (
            <ItemCardComponent
              key={productos.id}
              id={productos.id}
              titulo={productos.titulo}
              precio={productos.precio}
              img={productos.img}
              descripcion={productos.descripcion}
            />
          ))}
        </>
      </section>
    </main>
    </>
  );
};

export default ItemCategory;

