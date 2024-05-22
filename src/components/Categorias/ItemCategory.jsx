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
      <main className="justify-center">
        <section className="bg-slate-200  font-mono text-xl">
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
        </section>
      </main>
    </>
  );
};

export default ItemCategory;

