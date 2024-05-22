import { getProducts } from "../../AsyncMock";
import { useEffect, useState } from "react";
import ItemCardComponent from "../Card/ItemCardComponent";

const ItemListContainer = ({ greetings }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts.then((datos) => setProductos(datos));
  }, []);

  return (
    <main className="justify-center">
      <section className="bg-slate-200  font-mono text-xl">
        <h2 className=" text-center text-slate-600">{greetings}</h2>
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
