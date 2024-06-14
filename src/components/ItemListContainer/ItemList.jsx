import ItemCardComponent from "../Card/ItemCardComponent";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => (
        <ItemCardComponent
          key={producto.id}
          id={producto.id}
          title={producto.titulo}
          price={producto.precio}
          image={producto.img}

        />
      ))}
    </>
  );
};

export default ItemList;
