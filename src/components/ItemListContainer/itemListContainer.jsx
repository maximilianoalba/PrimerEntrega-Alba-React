import { getProducts } from "../../AsyncMock";
import { useEffect, useState } from "react";
import ItemCardComponent from "../Card/ItemCardComponent";

const ItemListContainer = ({}) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts.then((datos) => setProductos(datos));
  }, []);

  return (
    <main className=" font-mono bg-cyan-100 flex-wrap content-between">
      <div className=" bg-green-200 gap-5 my-4">
        <h2 className=" text-center font-mono text-slate-600">
          Bienvenidos a InfinitiByte PC
        </h2>
      </div>
      <section className=" flex gap-10   font-mono text-xl">
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
  );
};

export default ItemListContainer;
