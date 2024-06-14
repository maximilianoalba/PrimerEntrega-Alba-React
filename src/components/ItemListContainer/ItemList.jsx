import ItemCardComponent from "../Card/ItemCardComponent";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => (
        <ItemCardComponent
          key={producto.id}
          id={producto.id}
          titulo={producto.titulo}
          precio={producto.precio}
          img={producto.img}

        />
      ))}
    </>
  );
};

export default ItemList;
